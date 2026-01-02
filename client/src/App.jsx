import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
  });

  // const API_URL = "http://127.0.0.1:3000/api/task/";
  // const API_URL = 'http://localhost:3000/api/task';
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/task';

  // Fetch Tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Client-side Validation
  const isFormValid = formData.title.trim() !== '' && formData.dueDate !== '';

  // Create Task 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const res = await axios.post(API_URL, formData);
      setTasks([res.data, ...tasks]); // Dynamic update without reload
      setFormData({ title: '', description: '', priority: 'Medium', dueDate: '' }); // Reset form
    } catch (err) {
      alert("Error creating task");
    }
  };

  // Update Status
  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Pending' ? 'Completed' : 'Pending';
    try {
      const res = await axios.put(`${API_URL}/${id}`, { status: newStatus });
      setTasks(tasks.map(task => (task._id === id ? res.data : task)));
    } catch (err) {
      console.error("Error updating status", err);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>

      {/* Task Creation Form */}
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Task Title (Required)"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Description (Optional)"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        {/* Submit button disabled until validation passes */}
        <button type="submit" disabled={!isFormValid}>Add Task</button>
      </form>

      {/* Task List Display */}
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task._id} className="task-card">
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <small>Due: {new Date(task.dueDate).toLocaleDateString()} | Priority: <b>{task.priority}</b></small>
              <p>
                Status: <span className={task.status === 'Completed' ? 'status-completed' : 'status-pending'}>
                  {task.status}
                </span>
              </p>
            </div>
            <div className="task-actions">
              <button 
                className="complete-btn" 
                onClick={() => toggleStatus(task._id, task.status)}
              >
                {task.status === 'Pending' ? 'Mark Done' : 'Undo'}
              </button>
              <button className="delete-btn" onClick={() => deleteTask(task._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;