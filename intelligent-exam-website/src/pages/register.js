// ./pages/register.js

export function renderRegisterPage() {
    return `
    <div class="header">
        <h1>Intelligent Exam Website</h1>
        <div class="subtitle">Empowering Smart Learning</div>
    </div>
    <div class="nav">
        <button data-page="home">Home</button>
        <button data-page="exam">Take Exam</button>
        <button data-page="results">Results</button>
        <button data-page="profile">Profile</button>
        <button data-page="admin">Admin</button>
        <button data-page="login">Login/Logout</button>
    </div>
    <div class="container register-container">
        <form id="registerForm">
            <h2>Register</h2>
            <label for="newUsername">Username</label>
            <input type="text" id="newUsername" name="newUsername" required>

            <label for="newPassword">Password</label>
            <input type="password" id="newPassword" name="newPassword" required>

            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>

            <button type="submit">Register</button>
            <a class="login-link" href="#">Already have an account? Login</a>
        </form>
    </div>
    <div class="footer">
        &copy; 2025 Intelligent Exam Website
    </div>
    `;
}

export function setupRegisterPageEvents() {
    setTimeout(() => {
        const registerForm = document.getElementById("registerForm");

        if (registerForm) {
            registerForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const username = document.getElementById("newUsername").value.trim();
                const password = document.getElementById("newPassword").value;
                const confirmPassword = document.getElementById("confirmPassword").value;

                if (!username || !password || !confirmPassword) {
                    alert("Please fill in all fields.");
                    return;
                }

                if (password !== confirmPassword) {
                    alert("Passwords do not match!");
                    return;
                }

                const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
                const userExists = existingUsers.some(user => user.username === username);

                if (userExists) {
                    alert("Username already exists!");
                    return;
                }

                existingUsers.push({ username, password });
                localStorage.setItem("users", JSON.stringify(existingUsers));

                alert("Registration successful! Redirecting to login...");
                document.querySelector('[data-page="login"]')?.click();
            });

            const loginLink = document.querySelector(".login-link");
            if (loginLink) {
                loginLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.querySelector('[data-page="login"]')?.click();
                });
            }
        }
    }, 0);
}
