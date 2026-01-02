import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";
import TaskRoutes from "./routes/task.routes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use("/api/task", TaskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Task Tracker App");
});

connectDB(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });
