import { useState, useEffect } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function AddIncome({ close, getIncome, editIncome }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    if (editIncome) {
      setForm({
        title: editIncome.title,
        amount: editIncome.amount,
        category: editIncome.category,
        date: editIncome.date
          ? editIncome.date.substring(0, 10)
          : "",
      });
    }
  }, [editIncome]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editIncome) {
        await API.put(`/income/${editIncome._id}`, form);

        toast.success("Income Updated Successfully");
      } else {
        await API.post("/income", form);

        toast.success("Income Added Successfully");
      }

      getIncome();

      close();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          (editIncome
            ? "Failed to Update Income"
            : "Failed to Add Income")
      );
    }
  };

  return (
    <div className="modal">
      <form className="modal-box" onSubmit={handleSubmit}>
        <h2>{editIncome ? "Edit Income" : "Add Income"}</h2>

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
          <button type="submit">
            {editIncome ? "Update" : "Save"}
          </button>

          <button type="button" onClick={close}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddIncome;