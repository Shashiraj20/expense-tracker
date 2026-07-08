const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addExpense,
  getExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

router.post("/", authMiddleware, addExpense);

router.get("/", authMiddleware, getExpense);

router.put("/:id", authMiddleware, updateExpense);

router.delete("/:id", authMiddleware, deleteExpense);

module.exports = router;