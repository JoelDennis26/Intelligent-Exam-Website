export function renderExamPage() {
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
        <div class="header">
            <h2>Exam Title</h2>
            <label>
                <input type="checkbox" id="adminToggle"> Admin Mode
            </label>
        </div>
        <div class="admin-panel" id="adminPanel" style="display:none;">
            <strong>Admin Controls:</strong>
            <ul>
                <li><button class="btn edit-btn" type="button">Edit Question</button></li>
                <li><button class="btn edit-btn" type="button">Add Question</button></li>
                <li><button class="btn edit-btn" type="button">Delete Question</button></li>
                <li><button class="btn edit-btn" type="button">Publish/Unpublish Exam</button></li>
            </ul>
        </div>
        <form>
            <div class="question">
                <div><strong>Q1:</strong> What is the capital of France?</div>
                <ul class="options">
                    <li><label><input type="radio" name="q1"> Berlin</label></li>
                    <li><label><input type="radio" name="q1"> Madrid</label></li>
                    <li><label><input type="radio" name="q1"> Paris</label></li>
                    <li><label><input type="radio" name="q1"> Rome</label></li>
                </ul>
                <button class="btn edit-btn" type="button" style="display:none;">Edit</button>
            </div>
            <div class="question">
                <div><strong>Q2:</strong> 2 + 2 = ?</div>
                <ul class="options">
                    <li><label><input type="radio" name="q2"> 3</label></li>
                    <li><label><input type="radio" name="q2"> 4</label></li>
                    <li><label><input type="radio" name="q2"> 5</label></li>
                    <li><label><input type="radio" name="q2"> 6</label></li>
                </ul>
                <button class="btn edit-btn" type="button" style="display:none;">Edit</button>
            </div>
            <div class="actions">
                <button class="btn" type="submit">Submit Exam</button>
            </div>
        </form>
    </div>
    <div class="footer">
        &copy; 2025 Intelligent Exam Website
    </div>
    `;
}

export function setupExamPageEvents() {
    setTimeout(() => {
        const adminToggle = document.getElementById('adminToggle');
        const adminPanel = document.getElementById('adminPanel');
        const editButtons = document.querySelectorAll('.edit-btn[type="button"]');
        if (adminToggle && adminPanel && editButtons.length) {
            adminToggle.addEventListener('change', function() {
                if (this.checked) {
                    adminPanel.style.display = 'block';
                    editButtons.forEach(btn => btn.style.display = 'inline-block');
                } else {
                    adminPanel.style.display = 'none';
                    editButtons.forEach(btn => btn.style.display = 'none');
                }
            });
            // Hide edit buttons by default
            editButtons.forEach(btn => btn.style.display = 'none');
        }
    }, 0);
}