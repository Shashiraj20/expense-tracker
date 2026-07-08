import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import ExpensePieChart from "../components/PieChart";
import IncomeBarChart from "../components/BarChart";

function Dashboard() {
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    balance: 0,
  });

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const incomeRes = await API.get("/income");
      const expenseRes = await API.get("/expense");

      const totalIncome = incomeRes.data.income.reduce(
        (sum, item) => sum + item.amount,
        0
      );

      const totalExpense = expenseRes.data.expense.reduce(
        (sum, item) => sum + item.amount,
        0
      );

      setSummary({
        income: totalIncome,
        expense: totalExpense,
        balance: totalIncome - totalExpense,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <Header title="Dashboard" />

        <div className="summary-grid">
          <SummaryCard
            title="Total Income"
            amount={`₹${summary.income}`}
            color="#22c55e"
          />

          <SummaryCard
            title="Total Expense"
            amount={`₹${summary.expense}`}
            color="#ef4444"
          />

          <SummaryCard
            title="Balance"
            amount={`₹${summary.balance}`}
            color="#2563eb"
          />
        </div>

        <div className="chart-grid">
          <ExpensePieChart
            income={summary.income}
            expense={summary.expense}
          />

          <IncomeBarChart
            income={summary.income}
            expense={summary.expense}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;