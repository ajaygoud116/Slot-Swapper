import User from "../models/user_schema.js";
// import bcrypt from "bcryptjs";
import * as bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return res.json({ message: "Login successful", token });
  } catch (err) {
    return res.status(500).json({ message: "Error logging in", error: err.message });
  }
};
