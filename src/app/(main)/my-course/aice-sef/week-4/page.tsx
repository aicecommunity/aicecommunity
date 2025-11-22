'use client';

import { useState } from "react";
import SelectAiceSefWeek from "../../SelectAiceSefWeek";
import RunCodeCheckerPopup from "../../RunCodeCheckerPopup";
import Link from "next/link";
import { resources } from "../aice-sef-courses";
import { quiz4Questions } from "../quizQutestions/quiz4Questions";
import { useEffect } from "react";

export default function AiceSefWeek1() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [showQuiz, setShowQuiz] = useState(true);
  const [checkingStatus, setCheckingStatus] = useState(true);




  useEffect(() => {
    const checkQuizStatus = async () => {
      console.log("Checking if quiz was already passed...");

      // PLACEHOLDER: Simulate backend response
      const fakeBackendResponse = {
        quiz: "aice-sef-3",
        passed: false, // change to true to simulate passed quiz
      };

      if (fakeBackendResponse.passed) {
        setQuizPassed(true);
        setShowQuiz(false);
      }

      // Real Backend
      /**const res = await fetch("/api/quiz-status?quiz=aice-sef-3");
      const data = await res.json();

      if (data.passed) {
        setQuizPassed(true);
        setShowQuiz(false);
      }**/


      setCheckingStatus(false);
    };

    checkQuizStatus();
  }, []);



  const handleAnswer = (questionId, option) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleSubmitQuiz = () => {
    let correct = 0;

    quiz4Questions.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) {
        correct += 1;
      }
    });

    setScore(correct);
    setSubmittedAnswers(selectedAnswers);
    setSubmitted(true);

    // If all answers are correct
    if (correct === quiz4Questions.length) {
      setQuizPassed(true);
      setShowQuiz(false); // Collapse automatically
      sendQuizPassedSignal(); // Notify backend
    }
  };


  const sendQuizPassedSignal = () => {
    const payload = {
      quiz: "aice-sef-3",
      status: "passed",
      timestamp: new Date().toISOString()
    };

    console.log("📡 Sending to backend:", payload);

    // Later when backend exists, replace with real API call:
    // fetch("/api/quiz-status", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
  };






  return (
    <div className="md:p-6 p-3 space-y-8">
      {/* Course Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-lg sm:text-xl font-semibold leading-snug">
            Software Engineering Foundations - Week 1: Functions, Objects & Interfaces
        </h1>
        <div>
          <SelectAiceSefWeek/>
        </div>

        </div>


      {/* Lesson Card */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        {/* Lesson Title */}
        <h2 className="font-bold md:text-xl text-lg mb-4 text-gray-800">
          <span className=" text-gray-500 mr-2">AICE-SEF-4:</span>
          INTRODUCTION TO LINUX
        </h2>

        {/* Lesson Overview */}
        <div className="space-y-5 text-gray-700 mb-6">
          <p className="text-base">
            This week, we dive into the world of <strong>Linux</strong>, a powerful operating system widely used by developers, system administrators, and tech enthusiasts. Linux offers flexibility, control, and a deep understanding of how computers work behind the scenes.
          </p>

          <p className="text-base">
            You’ll start by exploring what Linux is, why developers love it, and the different <strong>Linux distributions</strong> available. We’ll guide you through installation options including WSL, Virtual Machines, and even running Linux on Android via UserLand. You’ll learn about <strong>desktop environments</strong> versus the <strong>terminal</strong> and why the terminal is such a vital tool for developers.
          </p>

          <p className="text-base">
            Once installed, you’ll explore the terminal in detail. You’ll understand what a <strong>shell</strong> is, how commands work, and how to navigate file paths and folder structures. You’ll also learn the difference between using a GUI and the command line to interact with your system.
          </p>

          <p className="text-base">
            After grasping the basics of the terminal, you’ll dive into <strong>essential Linux commands</strong> for navigation, file management, viewing files, permissions, searching, and even writing beginner-level Bash scripts. This knowledge forms the backbone of your Linux skills.
          </p>

          <p className="text-base">
            We will also cover <strong>package management</strong> with tools like apt, snap, and brew, installing and managing software, environment variables, and developer tools like Vim, Git, Python, and Node.js.
          </p>

          <p className="text-base">
            Finally, you’ll get introduced to <strong>Git and GitHub</strong>, learning version control basics, commits, branches, cloning, pushing, pulling, and resolving simple merge conflicts. By the end of the week, you’ll be equipped with a solid foundation in Linux and essential developer tools.
          </p>

          <p className="text-base">
            Make sure to complete the chapter quizzes, practical assignments, and follow along with the tutorials to fully grasp these critical skills.
          </p>
        </div>

        {/* Resource Links */}
        <div className="mb-6">
          <h3 className="font-semibold text-md mb-2 text-gray-800">Resources</h3>
          <div className="space-y-3">
            {resources
              .filter(item => item.id >= 5 && item.id <= 9) // adjust ids for Linux chapters
              .map((item, i) => (
                <Link
                  key={item.id}
                  href={`/my-course/aice-sef/${item.name}`}
                  className="block p-3 rounded-md border border-gray-200 bg-gray-50 hover:bg-[#195C49] hover:text-white transition-colors shadow-sm text-sm font-medium"
                >
                  {i + 1}. {item.displayName}
                </Link>
              ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-4">
          <h3 className="font-semibold text-md mb-2 text-gray-800">Lesson Video</h3>
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-md overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID" // replace with actual Linux intro video
              title="Introduction to Linux"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>



      {/* Quiz Section */}
      <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-200">
        {checkingStatus ? (
          <p>Checking quiz status...</p>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="md:text-lg font-semibold">Quiz: Test Your Understanding</h2>

              <button
                onClick={() => setShowQuiz(prev => !prev)}
                className="md:text-sm text-xs text-[#195C49] underline"
              >
                {showQuiz ? "Hide Quiz" : "Show Quiz"}
              </button>
            </div>

            {quizPassed && (
              <p className="mb-3 text-green-600 font-medium">
                ✅ You have already passed this quiz
              </p>
            )}

            {showQuiz && (
              <>
                {quiz4Questions.map(q => {
                  const isIncorrect =
                    submitted && submittedAnswers[q.id] !== q.answer;

                  const isCorrect =
                    submitted && submittedAnswers[q.id] === q.answer;

                  return (
                    <div
                      key={q.id}
                      className={`mb-4 p-3 rounded-md 
                        ${isIncorrect ? 'border-l-4 border-red-500 bg-red-50' : ''} 
                        ${isCorrect ? 'border-l-4 border-green-500 bg-green-50' : ''}`}
                    >
                      <p className="font-medium mb-2">
                        {q.id}. {q.question}
                      </p>

                      {q.options.map((opt, idx) => (
                        <label key={idx} className="block text-sm mt-1">
                          <input
                            type="radio"
                            name={`q${q.id}`}
                            checked={selectedAnswers[q.id] === opt}
                            onChange={() => handleAnswer(q.id, opt)}
                            disabled={quizPassed}
                            className="mr-2 cursor-pointer disabled:cursor-not-allowed"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  );
                })}

                <button
                  onClick={handleSubmitQuiz}
                  disabled={quizPassed}
                  className="bg-[#195C49] w-[10rem] text-white px-4 py-2 rounded-md 
                    hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {quizPassed ? "Quiz Passed ✅" : "Submit Quiz"}
                </button>

                {score !== null && (
                  <p className="mt-4 font-medium">
                    You scored {score} out of {quiz4Questions.length}
                  </p>
                )}
              </>
            )}
          </>
        )}
      </div>



      {/* Practical Task Section */}
      <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Practical Task: Comparison and Logical Operators</h2>
        <h3 className="font-medium mb-2">Task Description:</h3>
        <p className="text-sm text-gray-700 mb-3">
          Create a TypeScript file that does the following:
        </p>

        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>Defines a function called greetUser that:</li>
          <ul className="list-disc list-inside ml-6">
            <li>Accepts two parameters:
              <ul className="list-disc list-inside ml-6">
                <li>name (string)</li>
                <li>age (number)</li>
              </ul>
            </li>
            <li>
              Returns a greeting message (string) based on the user&apos;s age:
              <ul className="list-disc list-inside ml-6">
                <li>If the age is 18 or above, return &quot;Welcome, {`{name}`}! You are eligible.&quot;</li>
                <li>Otherwise, return &quot;Sorry, {`{name}`}! You are not eligible yet.&quot;</li>
              </ul>
            </li>
          </ul>
          <li>Make sure to explicitly type both the parameters and the return value.</li>
          <li>Call the function with at least two different sets of values and print the results.</li>
        </ul>

        <h3 className="font-medium mb-2">Instructions:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>Repository: aice-typescript</li>
          <li>Directory: week-2</li>
          <li>Name your file: <code>2_1_function_types.ts</code></li>
        </ul>

        {/* <button className="bg-[#195C49] w-[12rem] text-white px-4 py-2 rounded-md hover:bg-green-700">
          Run Code Checker
        </button> */}
        <RunCodeCheckerPopup />
      </div>
    </div>
  );
}
