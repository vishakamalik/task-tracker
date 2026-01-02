import express from "express";
import {
  deleteTask,
  getTask,
  PostTask,
  putTask,
} from "../controllers/task.controllers.js";

const router = express.Router();

router.post("/", PostTask);
router.get("/", getTask);
router.put("/:id", putTask);
router.delete("/:id", deleteTask);

export default router;
