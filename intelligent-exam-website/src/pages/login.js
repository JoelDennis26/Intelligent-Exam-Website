// ./pages/login.js

export function renderLoginPage() {
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
        <button data-page="register">Register</button>
    </div>
    <div class="container login-container">
        <form id="loginForm">
            <h2>Login</h2>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
            <a class="register-link" href="#">Don't have an account? Register</a>
        </form>
    </div>
    <div class="footer">
        &copy; 2025 Intelligent Exam Website
    </div>
  `;
}

export function setupLoginPageEvents() {
  setTimeout(() => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        if (!username || !password) {
          alert("Please fill in both fields.");
          return;
        }

        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const matchedUser = users.find(user => user.username === username && user.password === password);

        if (matchedUser) {
          localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

          alert("Login successful!");

          if (username === "admin") {
            document.querySelector('[data-page="admin"]')?.click();
          } else {
            document.querySelector('[data-page="profile"]')?.click();
          }
        } else {
          alert("Invalid username or password.");
        }
      });
    }

    const registerLink = document.querySelector(".register-link");
    if (registerLink) {
      registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('[data-page="register"]')?.click();
      });
    }
  }, 0);
}
