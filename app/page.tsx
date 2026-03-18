export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📚 Sylly Tracker
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <p className="mb-4 text-gray-600">
          Upload your syllabus and track assignments, quizzes, and tests.
        </p>

        <input
          type="file"
          className="w-full p-2 border rounded-lg mb-6"
        />

        <h2 className="text-xl font-semibold mb-3">Your Assignments</h2>

        <ul className="space-y-2">
          <li className="bg-blue-100 text-blue-700 p-2 rounded">
            Homework 1 - Jan 20
          </li>
          <li className="bg-green-100 text-green-700 p-2 rounded">
            Quiz 1 - Jan 25
          </li>
          <li className="bg-red-100 text-red-700 p-2 rounded">
            Midterm Exam - Feb 10
          </li>
        </ul>
      </div>
    </main>
  );
}