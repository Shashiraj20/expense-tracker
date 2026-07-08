import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <h2>Expense Tracker</h2>

      <Link
        className={pathname === "/dashboard" ? "active" : ""}
        to="/dashboard"
      >
        <FaHome /> Dashboard
      </Link>

      <Link
        className={pathname === "/income" ? "active" : ""}
        to="/income"
      >
        <FaWallet /> Income
      </Link>

      <Link
        className={pathname === "/expense" ? "active" : ""}
        to="/expense"
      >
        <FaMoneyBillWave /> Expense
      </Link>

      <Link
        className={pathname === "/profile" ? "active" : ""}
        to="/profile"
      >
        <FaUser /> Profile
      </Link>
    </div>
  );
}

export default Sidebar;