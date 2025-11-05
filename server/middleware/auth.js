import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Middleware to check JWT token
export default function authMiddleware(req, res, next) {
  try {
    // Read token from Authorization header: "Bearer <token>"
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // get the token part
    if (!token) {
      return res.status(401).json({ message: "Access denied. Invalid token format." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach decoded user info to request
    next(); // pass control to next middleware
  } catch (err) {
    return res.status(400).json({ message: "Invalid token", error: err.message });
  }
}
