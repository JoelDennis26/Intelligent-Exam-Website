export function renderAdminPage() {
    return `
    <div class="header">
        <h1>Intelligent Exam Website</h1>
        <div class="subtitle">Admin Dashboard</div>
    </div>
    <div class="nav">
        <button data-page="admin">Dashboard</button>
        <button data-page="users">Users</button>
        <button data-page="exam">Exams</button>
        <button data-page="results">Results</button>
        <button data-page="settings">Settings</button>
        <button data-page="login">Logout</button>
    </div>
    <div class="container">
        <div class="grid">
            <div class="card">
                <h2>Users</h2>
                <p>Manage user accounts and permissions.</p>
                <button class="btn" data-page="users">Go to Users</button>
            </div>
            <div class="card">
                <h2>Exams</h2>
                <p>Create, edit, and schedule exams.</p>
                <button class="btn" data-page="exam">Go to Exams</button>
            </div>
            <div class="card">
                <h2>Results</h2>
                <p>View and analyze exam results.</p>
                <button class="btn" data-page="results">Go to Results</button>
            </div>
            <div class="card">
                <h2>Settings</h2>
                <p>Configure system preferences.</p>
                <button class="btn" data-page="settings">Go to Settings</button>
            </div>
        </div>
    </div>
    <div class="footer">
        &copy; 2025 Intelligent Exam Website
    </div>
    `;
}