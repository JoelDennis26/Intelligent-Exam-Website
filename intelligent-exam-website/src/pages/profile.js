export function renderProfilePage() {
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
    <div class="container profile-container">
        <h2>Edit Profile</h2>
        <form id="profileForm">
            <label for="username">Username</label>
            <input type="text" id="username" value="john_doe" readonly>
            <span class="note admin-only">Only admin can change username</span>

            <label for="email">Email</label>
            <input type="email" id="email" value="john@example.com">

            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" value="John Doe">

            <label for="role">Role</label>
            <input type="text" id="role" value="User" readonly>
            <span class="note admin-only">Only admin can change role</span>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter new password">

            <button type="submit">Save Changes</button>
        </form>
        <div id="profileMessage" class="profile-message"></div>
    </div>
    <div class="footer">
        &copy; 2025 Intelligent Exam Website
    </div>
    `;
}

export function setupProfilePageEvents() {
    setTimeout(() => {
        const profileForm = document.getElementById('profileForm');
        const profileMessage = document.getElementById('profileMessage');
        if (profileForm && profileMessage) {
            profileForm.addEventListener('submit', function(e) {
                e.preventDefault();
                profileMessage.textContent = "Profile changes saved (demo only).";
                profileMessage.style.color = "#3a7afe";
                setTimeout(() => {
                    profileMessage.textContent = "";
                }, 2500);
            });
        }
    }, 100);
}