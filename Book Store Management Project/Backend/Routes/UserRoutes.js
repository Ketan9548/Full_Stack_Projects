import express from "express";
import { User } from "../Models/UserModels.js";

const Userroute = express.Router();

Userroute.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User(name, email, password);
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "User registration failed" });
  }
});

