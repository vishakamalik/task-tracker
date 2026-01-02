# Task Tracker Application

A full-stack **MERN** (MongoDB, Express, React, Node.js) web application designed to track daily tasks. Users can create, view, update, delete, filter, and sort tasks efficiently.

This project was built to demonstrate clear separation between frontend and backend logic, RESTful API design, and state management.

## 🚀 Features

**Task Management**: Create new tasks with title, description, priority, and due date .

**CRUD Operations**: Full Create, Read, Update (Status), and Delete functionality .

**Smart Validation**: Client-side validation ensures required fields are present before submission.

**Responsive Design**: Optimized for various screen sizes using CSS.

**Status Indicators**: Visual cues for Pending vs. Completed tasks.

## 🛠️ Tech Stack

**Frontend**: React.js (Vite), CSS 

**Backend**: Node.js, Express.js 

**Database**: MongoDB (Mongoose) 

**State Management**: React `useState` / `useEffect` 

## ⚙️ Installation & Setup

Follow these steps to run the application locally.

### 1. Prerequisites

* Node.js installed
* MongoDB installed locally or a MongoDB Atlas connection string

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install

```

`Create a `.env` file in the `server` folder and add your configuration:`

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/task-tracker
# Or your MongoDB Atlas connection string

```

Start the backend server:

```bash
node server.js
# or if using nodemon
npm run dev

```

*The server will run on `http://localhost:3000`.*

### 3. Frontend Setup

Open a new terminal, navigate to the client directory, and install dependencies:

```bash
cd client
npm install

```

Start the Vite development server:

```bash
npm run dev

```

*The frontend will typically run on `http://localhost:5173`.*

---

## 📡 API Endpoints

The backend exposes the following RESTful API endpoints:

**GET** -> `/api/task` -> Fetch all tasks.

**POST** -> `/api/task` -> Create a new task.

**PUT** -> `/api/task/:id` -> Update a task (e.g., toggle status). 

**DELETE** -> `/api/task/:id` -> Remove a task permanently.

## 📂 Project Structure

```
task-tracker/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── App.jsx         # Main UI Logic
│   │   ├── App.css         # Styling
│   │   └── main.jsx        # Entry point
│   └── package.json
│
├── server/                 # Backend (Node + Express)
│   ├── db/
│   │   └── connect.js      # Database Connection
│   ├── models/
        └── task.models.js         # Mongoose Schema
│   ├── controllers/
        └── task.controllers.js    # Controller Functions
│   ├── routes/
│   │   └── task.routes.js  # API Routes
│   ├── server.js           # Server Entry Point
│   └── package.json
│
└── README.md

```

## 📝 Usage Guide

1. **Add a Task**: Fill in the title and date. Select priority. The "Add Task" button enables only when valid.
2. **Complete**: Click the "Mark Done" button to toggle status.
3. **Delete**: Click "Delete" to remove a task (includes confirmation prompt).

`Author : Vishaka Malik`
