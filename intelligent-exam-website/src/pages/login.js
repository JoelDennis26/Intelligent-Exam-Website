export function renderLoginPage() {
    // The HTML structure for the login/logout page
    return `
    <div class="header">
        <h1>Intelligent Exam Website</h1>
        <div class="subtitle">Empowering Smart Learning</div>
    </div>
    <div class="nav">
        <button onclick="location.href='home.html'">Home</button>
        <button onclick="location.href='exam.html'">Take Exam</button>
        <button onclick="location.href='results.html'">Results</button>
        <button onclick="location.href='profile.html'">Profile</button>
        <button onclick="location.href='admin.html'">Admin</button>
        <button onclick="location.href='login.html'">Login/Logout</button>
    </div>
    <div class="container login-container">
        <form id="loginForm">
            <h2>Login</h2>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required autocomplete="username">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required autocomplete="current-password">
            <button type="submit">Login</button>
            <a class="register-link" href="#">Don't have an account? Register</a>
        </form>
        <div class="logout-section" id="logoutSection">
            <h2>Welcome!</h2>
            <p>You are logged in.</p>
            <button id="logoutBtn">Logout</button>
        </div>
    </div>
    <div class="footer">
        &copy; 2025 Intelligent Exam Website
    </div>
    `;
}

// Add this function to handle login/logout logic after rendering
export function setupLoginPageEvents() {
    setTimeout(() => {
        const loginForm = document.getElementById('loginForm');
        const logoutSection = document.getElementById('logoutSection');
        const logoutBtn = document.getElementById('logoutBtn');

        if (loginForm && logoutSection && logoutBtn) {
            loginForm.style.display = 'block';
            logoutSection.style.display = 'none';

            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                loginForm.style.display = 'none';
                logoutSection.style.display = 'flex';
            });

            logoutBtn.addEventListener('click', function() {
                logoutSection.style.display = 'none';
                loginForm.style.display = 'block';
                loginForm.reset();
            });
        }
    }, 0);
}