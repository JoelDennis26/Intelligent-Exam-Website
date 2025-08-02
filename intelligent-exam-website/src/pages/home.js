export function renderHomePage() {
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
    <div class="container">
        <div class="section hero">
            <img src="logo.png" alt="Logo" class="logo" />
            <h2>Welcome to Intelligent Exam Website!</h2>
            <p>Your platform for smart, AI-powered assessments and instant feedback.</p>
            <button class="quick-start" data-page="exam">Quick Start</button>
        </div>
        <div class="row">
            <div class="col section">
                <div class="section-title">Upcoming Exams</div>
                <ul class="list">
                    <li>Mathematics - 5 Aug 2025</li>
                    <li>Physics - 10 Aug 2025</li>
                    <li>Chemistry - 15 Aug 2025</li>
                </ul>
            </div>
            <div class="col section">
                <div class="section-title">Recent Results</div>
                <ul class="list">
                    <li>Mathematics: 85% (Passed)</li>
                    <li>English: 78% (Passed)</li>
                    <li>Biology: 62% (Needs Improvement)</li>
                </ul>
            </div>
        </div>
        <div class="section">
            <div class="section-title">Features</div>
            <ul class="features-list">
                <li>AI-powered question generation</li>
                <li>Instant feedback on submissions</li>
                <li>Progress tracking and analytics</li>
                <li>Timed and adaptive exams</li>
            </ul>
        </div>
        <div class="section footer-section">
            <div class="section-title">Contact & Info</div>
            <p>
                <a href="mailto:support@intelligentexam.com">Contact us</a> |
                <a href="#">Privacy Policy</a> |
                <a href="#">Terms of Service</a>
            </p>
        </div>
    </div>
    <div class="footer">
        &copy; 2025 Intelligent Exam Website
    </div>
</div>
    `;
}
