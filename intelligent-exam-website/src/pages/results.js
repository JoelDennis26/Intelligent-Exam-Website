export function renderResultsPage() {
  return `
    <div class="container">
        <div class="nav">
            <button data-page="home">Home</button>
            <button data-page="profile">Profile</button>
            <button data-page="exam">Take Another Exam</button>
        </div>

        <div class="header">
            <h1>Exam Results</h1>
            <p>Student Name: <strong>[Name]</strong></p>
            <p>Exam: <strong>[Exam Title]</strong></p>
        </div>
        
        <div class="summary">
            <div class="summary-item">
                <h2>[Score]</h2>
                <p>Total Score</p>
            </div>
            <div class="summary-item">
                <h2>[Correct]</h2>
                <p>Correct Answers</p>
            </div>
            <div class="summary-item">
                <h2>[Time]</h2>
                <p>Time Taken</p>
            </div>
        </div>

        <table class="results-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Your Answer</th>
                    <th>Correct Answer</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>[Question text]</td>
                    <td>[Your answer]</td>
                    <td>[Correct answer]</td>
                    <td>[✔/✖]</td>
                </tr>
                <!-- More rows -->
            </tbody>
        </table>

        <div class="actions">
            <button data-page="profile" class="secondary">Back to Dashboard</button>
            <button data-page="review">Review Answers</button>
            <button id="downloadPdf">Download PDF</button>
        </div>
    </div>
  `;
}
