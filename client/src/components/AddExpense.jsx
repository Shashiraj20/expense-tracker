import { useState, useEffect } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function AddExpense({ close, getExpense, editExpense }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    if (editExpense) {
      setForm({
        title: editExpense.title,
        amount: editExpense.amount,
        category: editExpense.category,
        date: editExpense.date?.split("T")[0],
      });
    }
  }, [editExpense]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editExpense) {
        await API.put(`/expense/${editExpense._id}`, form);
        toast.success("Expense Updated");
      } else {
        await API.post("/expense", form);
        toast.success("Expense Added");
      }

      getExpense();
      close();
    } catch (error) {
      toast.error(editExpense ? "Update Failed" : "Failed to Add Expense");
    }
  };

  return (
    <div className="modal">
      <form className="modal-box" onSubmit={handleSubmit}>
        <h2>{editExpense ? "Edit Expense" : "Add Expense"}</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
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
            {editExpense ? "Update" : "Save"}
          </button>

          <button type="button" onClick={close}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;