const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
    const { username, password, role } = req.body;
    const hashed = bcrypt.hashSync(password,10);

    db.query(
        "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
        [username, email, role || "student"],
        (err, result) => {
            if (err) {
                console.error("Error registering user:", err);
                return res.status(500).json({ message: "Error registering user" });
            }
            res.status(201).json({ message: "User registered successfully" });
        }
    );
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, results) => {
            if (err || results.length === 0) {
                return res.status(401).json({ message: "Invalid username or password" });
            }

            const hashedPassword = results[0].password_hash;

            if (!hashedPassword) {
                return res.status(500).json({ message: "Password not found in database" });
            }

            bcrypt.compare(password, hashedPassword, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).json({ message: "Invalid username or password" });
                }

                const token = jwt.sign({ userId: results[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
                res.json({ token, user_id: results[0].id });
            });
        }
    );
};