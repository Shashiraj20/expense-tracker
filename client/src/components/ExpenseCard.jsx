import {
  FaTrash,
  FaEdit,
  FaCalendarAlt,
  FaTag,
  FaMoneyBillWave,
} from "react-icons/fa";

function ExpenseCard({ expense, onDelete, onEdit }) {
  return (
    <div className="expense-card">
      <div className="expense-top">
        <h3>{expense.title}</h3>

        <div className="card-actions">
          <button
            className="edit-btn"
            onClick={() => onEdit(expense)}
          >
            <FaEdit />
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(expense._id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>

      <div className="expense-body">
        <p>
          <FaMoneyBillWave className="icon" />
          ₹ {expense.amount}
        </p>

        <p>
          <FaTag className="icon" />
          {expense.category}
        </p>

        <p>
          <FaCalendarAlt className="icon" />
          {new Date(expense.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default ExpenseCard;