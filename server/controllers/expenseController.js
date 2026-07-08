const Expense = require("../models/Expense");

// Add Expense
const addExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    const expense = await Expense.create({
      user: req.user,
      title,
      amount,
      category,
      date,
    });

    res.status(201).json({
      success: true,
      message: "Expense Added Successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Expense
const getExpense = async (req, res) => {
  try {
    const expense = await Expense.find({ user: req.user }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      expense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Expense
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Expense Updated Successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Expense
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Expense Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getExpense,
  updateExpense,
  deleteExpense,
};