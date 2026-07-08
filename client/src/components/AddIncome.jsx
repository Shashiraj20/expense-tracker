import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function AddIncome({ close, getIncome }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/income", form);

      toast.success("Income Added Successfully");

      getIncome();

      close();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to Add Income"
      );
    }
  };

  return (
    <div className="modal">
      <form className="modal-box" onSubmit={handleSubmit}>
        <h2>Add Income</h2>

        <input
          type="text"
          name="title"
          placeholder="Income Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <div className="modal-btns">
          <button type="submit">Save</button>

          <button type="button" onClick={close}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddIncome;