import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AddIncome from "../components/AddIncome";
import IncomeCard from "../components/IncomeCard";
import API from "../services/api";
import toast from "react-hot-toast";

function Income() {
  const [income, setIncome] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // NEW
  const [editIncome, setEditIncome] = useState(null);

  useEffect(() => {
    getIncome();
  }, []);

  const getIncome = async () => {
    try {
      const res = await API.get("/income");
      setIncome(res.data.income);
    } catch (error) {
      toast.error("Failed to fetch income");
    }
  };

  const deleteIncome = async (id) => {
    try {
      await API.delete(`/income/${id}`);
      toast.success("Income Deleted");
      getIncome();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  // NEW
  const handleEdit = (item) => {
    setEditIncome(item);
    setShowModal(true);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <Header title="Income" />

        <div className="page-top">
          <button
            className="add-btn"
            onClick={() => {
              setEditIncome(null);
              setShowModal(true);
            }}
          >
            + Add Income
          </button>
        </div>

        {showModal && (
          <AddIncome
            getIncome={getIncome}
            close={() => setShowModal(false)}
            editIncome={editIncome}
          />
        )}

        <div className="card-grid">
          {income.map((item) => (
            <IncomeCard
              key={item._id}
              income={item}
              onDelete={deleteIncome}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Income;