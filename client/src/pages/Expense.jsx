import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AddExpense from "../components/AddExpense";
import ExpenseCard from "../components/ExpenseCard";
import API from "../services/api";
import toast from "react-hot-toast";

function Expense() {
  const [expense, setExpense] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    getExpense();
  }, []);

  const getExpense = async () => {
    try {
      const res = await API.get("/expense");
      setExpense(res.data.expense);
    } catch (error) {
      toast.error("Failed to fetch expense");
    }
  };

  const deleteExpense = async (id) => {
    try {
      await API.delete(`/expense/${id}`);
      toast.success("Expense Deleted");
      getExpense();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  const handleEdit = (item) => {
    setEditExpense(item);
    setShowModal(true);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <Header title="Expense" />

        <div className="page-top">
          <button
            className="add-btn"
            onClick={() => {
              setEditExpense(null);
              setShowModal(true);
            }}
          >
            + Add Expense
          </button>
        </div>

        {showModal && (
          <AddExpense
            getExpense={getExpense}
            close={() => setShowModal(false)}
            editExpense={editExpense}
          />
        )}

        <div className="card-grid">
          {expense.map((item) => (
            <ExpenseCard
              key={item._id}
              expense={item}
              onDelete={deleteExpense}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expense;