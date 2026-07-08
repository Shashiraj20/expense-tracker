const Income = require("../models/Income");

// Add Income
const addIncome = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    const income = await Income.create({
      user: req.user,
      title,
      amount,
      category,
      date,
    });

    res.status(201).json({
      success: true,
      message: "Income Added Successfully",
      income,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Income
const getIncome = async (req, res) => {
  try {
    const income = await Income.find({ user: req.user }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      income,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Income
const updateIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!income) {
      return res.status(404).json({
        success: false,
        message: "Income Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Income Updated",
      income,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Income
const deleteIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });

    if (!income) {
      return res.status(404).json({
        success: false,
        message: "Income Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Income Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addIncome,
  getIncome,
  updateIncome,
  deleteIncome,
};