import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'], 
    default: 'Medium',
  },
  dueDate: {
    type: Date,
    required: true, 
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed'], 
    default: 'Pending',
  },
}, { timestamps: true });

const task = mongoose.model("Task", TaskSchema);
export default task;