import {
  FaTrash,
  FaEdit,
  FaCalendarAlt,
  FaTag,
  FaWallet,
} from "react-icons/fa";

function IncomeCard({ income, onDelete, onEdit }) {
  return (
    <div className="income-card">
      <div className="income-top">
        <h3>{income.title}</h3>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="edit-btn"
            onClick={() => onEdit(income)}
          >
            <FaEdit />
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(income._id)}
          >
            <FaTrash />
          </button>
        </div>
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