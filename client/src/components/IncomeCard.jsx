import { FaTrash, FaCalendarAlt, FaTag, FaWallet } from "react-icons/fa";

function IncomeCard({ income, onDelete }) {
  return (
    <div className="income-card">

      <div className="income-top">

        <h3>{income.title}</h3>

        <button
          className="delete-btn"
          onClick={() => onDelete(income._id)}
        >
          <FaTrash />
        </button>

      </div>

      <div className="income-body">

        <p>
          <FaWallet className="income-icon" />
          ₹ {income.amount}
        </p>

        <p>
          <FaTag className="income-icon" />
          {income.category}
        </p>

        <p>
          <FaCalendarAlt className="income-icon" />
          {new Date(income.date).toLocaleDateString()}
        </p>

      </div>

    </div>
  );
}

export default IncomeCard;