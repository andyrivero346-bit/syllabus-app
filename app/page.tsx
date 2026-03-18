export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Syllabus Tracker 📚</h1>

      <p>Upload your syllabus and track assignments, quizzes, and tests.</p>

      <input type="file" />

      <h2 style={{ marginTop: "20px" }}>Your Assignments</h2>

      <ul>
        <li style={{ color: "blue" }}>Homework 1 - Jan 20</li>
        <li style={{ color: "green" }}>Quiz 1 - Jan 25</li>
        <li style={{ color: "red" }}>Midterm Exam - Feb 10</li>
      </ul>
    </main>
  );
}