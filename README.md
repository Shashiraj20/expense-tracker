# Expense Tracker

## 📌 About the Project

**Expense Tracker** is a full-stack web application developed using the **MERN Stack**. The main purpose of this application is to help users manage and track their daily income and expenses from a single dashboard.

Users can create an account, log in securely, add income and expense transactions, view their financial summary, and analyze their transactions using charts.

## 🎯 Purpose

I built this project to practice real-world MERN stack development, including:

* Frontend development with React
* REST API development with Node.js and Express
* MongoDB database operations
* JWT authentication
* Frontend and backend integration
* CRUD operations
* Data visualization

## ✨ Main Features

### Authentication

Users can register and log in using their credentials. JWT is used to authenticate users and protect private API routes.

### Income Management

Users can add and view their income transactions and manage their income records.

### Expense Management

Users can add and view their expenses and manage expense records.

### Dashboard

The dashboard displays the user's financial summary, including total income, total expenses, and balance.

### Data Visualization

Charts are used to represent income and expense data visually.

### Excel Export

Users can export their transaction data into an Excel file.

## 🔄 How the Project Works

The application follows a frontend-backend architecture:

```text
User
  ↓
React Frontend
  ↓
Axios API Request
  ↓
Express.js Backend
  ↓
JWT Authentication Middleware
  ↓
Controller
  ↓
Mongoose
  ↓
MongoDB
  ↓
API Response
  ↓
React UI
```

For example, when a user adds an expense:

```text
Expense Form
     ↓
React collects form data
     ↓
Axios sends POST request
     ↓
Express receives request
     ↓
JWT middleware verifies user
     ↓
Controller processes expense
     ↓
Mongoose saves data
     ↓
MongoDB stores expense
     ↓
Backend sends response
     ↓
React updates the UI
```

## 🛠️ Technologies Used

**Frontend**

* React.js
* Vite
* Axios
* Recharts

**Backend**

* Node.js
* Express.js
* Mongoose

**Database**

* MongoDB

**Authentication**

* JWT
* bcryptjs

**Other**

* ExcelJS

## 📂 Project Structure

```text
expense-tracker/
│
├── frontend/
│   └── src/
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── index.js
```

## 💡 What I Learned

Through this project, I learned how to build a complete full-stack application and connect a React frontend with an Express/Node.js backend.

I also practiced:

* Creating REST APIs
* MongoDB CRUD operations
* JWT authentication
* Password hashing
* Axios API integration
* Express middleware
* Protected routes
* Data visualization
* Frontend-backend communication
