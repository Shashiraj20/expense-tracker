const ExcelJS = require("exceljs");
const Income = require("../models/Income");
const Expense = require("../models/Expense");

const exportExcel = async (req, res) => {
  try {
    const userId = req.user;

    const incomes = await Income.find({ user: userId });
    const expenses = await Expense.find({ user: userId });

    const workbook = new ExcelJS.Workbook();

    // Income Sheet
    const incomeSheet = workbook.addWorksheet("Income");

    incomeSheet.columns = [
      { header: "Title", key: "title", width: 25 },
      { header: "Amount", key: "amount", width: 15 },
      { header: "Category", key: "category", width: 20 },
      { header: "Date", key: "date", width: 20 },
    ];

    incomes.forEach((income) => {
      incomeSheet.addRow({
        title: income.title,
        amount: income.amount,
        category: income.category,
        date: income.date.toLocaleDateString(),
      });
    });

    // Expense Sheet
    const expenseSheet = workbook.addWorksheet("Expense");

    expenseSheet.columns = [
      { header: "Title", key: "title", width: 25 },
      { header: "Amount", key: "amount", width: 15 },
      { header: "Category", key: "category", width: 20 },
      { header: "Date", key: "date", width: 20 },
    ];

    expenses.forEach((expense) => {
      expenseSheet.addRow({
        title: expense.title,
        amount: expense.amount,
        category: expense.category,
        date: expense.date.toLocaleDateString(),
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=ExpenseTracker.xlsx"
    );

    await workbook.xlsx.write(res);

    res.end();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = exportExcel;