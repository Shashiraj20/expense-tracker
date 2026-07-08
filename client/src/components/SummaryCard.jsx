function SummaryCard({ title, amount, color }) {
  return (
    <div className="summary-card">
      <p>{title}</p>
      <h2 style={{ color }}>{amount}</h2>
    </div>
  );
}

export default SummaryCard;