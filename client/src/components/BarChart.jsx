import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function IncomeBarChart({ income, expense }) {
  const data = [
    {
      name: "Summary",
      Income: income,
      Expense: expense,
    },
  ];

  return (
    <div className="chart-card">
      <h3>Financial Summary</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="Income" fill="#22c55e" />

          <Bar dataKey="Expense" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeBarChart;