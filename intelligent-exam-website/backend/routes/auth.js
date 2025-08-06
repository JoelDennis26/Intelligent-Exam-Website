const express = require("express");
const db = require("../config/db");

const router = express.Router();

// LOGIN route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log("Login request received:", username, password);

    try {
        const [rows] = await db.query(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password]
        );

        if (rows.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = rows[0];
        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "An error occurred during login" });
    }
});

// REGISTER route
router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const [existingUser] = await db.query(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );

        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Username already exists" });
        }

        await db.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, password]
        );

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({ message: "An error occurred during registration" });
    }
});

module.exports = router;