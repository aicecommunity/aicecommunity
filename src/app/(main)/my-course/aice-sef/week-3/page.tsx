'use client';

import { useState } from "react";
import SelectAiceSefWeek from "../../SelectAiceSefWeek";
import RunCodeCheckerPopup from "../../RunCodeCheckerPopup";
import Link from "next/link";
import { resources } from "../aice-sef-courses";
import { quizQuestions } from "../aice-sef-quiz";
import { useEffect } from "react";

export default function AiceSefWeek1() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [showQuiz, setShowQuiz] = useState(true);
  const [checkingStatus, setCheckingStatus] = useState(true);

  // Filter questions for this week
  const filteredQuiz = quizQuestions.filter(q => q.id >= 1 && q.id <= 20);




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

    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) {
        correct += 1;
      }
    });

    setScore(correct);
    setSubmittedAnswers(selectedAnswers);
    setSubmitted(true);

    // If all answers are correct
    if (correct === quizQuestions.length) {
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
        <h2 className="font-bold text-xl mb-4 text-gray-800">
          FOUNDATIONS OF SOFTWARE ENGINEERING
        </h2>

        {/* Lesson Overview */}
        <div className="space-y-5 text-gray-700 mb-6">
          <p className="text-base">
            <strong>Welcome to your journey into the world of software engineering!</strong> 
            Think of this week as the first step on a path that will take you from understanding simple programs to creating complex software that people around the world use every day. Before you can build software, it’s important to understand what it really is, the different forms it takes, and the role of the people who make it. Software engineers are problem solvers, creators, and thinkers—they take ideas and turn them into working programs, apps, and systems that make life easier and more connected.
          </p>

          <p className="text-base">
            To truly understand software, we first need to peek inside the machines it runs on. Computers might seem like magic, but they follow clear rules and structures. You will discover how the CPU, memory, and storage work together to process information, how programs are executed, and how files and folders are organized. You’ll also see how the smallest units of data—bits and bytes—come together to form everything a computer does.
          </p>

          <p className="text-base">
            The journey doesn’t stop with a single computer. The internet connects millions of computers around the globe, allowing information to flow instantly. This week, you’ll explore how the internet works, from IP addresses and domain names to the client–server model that makes websites and apps function. You’ll learn the difference between <strong>HTTP</strong> and <strong>HTTPS</strong>, and follow the invisible journey of a simple web request to see what really happens when you click a link or open a website.
          </p>

          <p className="text-base">
            But knowledge of machines and networks isn’t enough. Being a software engineer is about <strong>how you think</strong>. This week, you’ll start developing a developer’s mindset: how to approach problems logically, plan solutions using algorithms, flowcharts, and pseudocode, and debug errors when things go wrong. You’ll also learn strategies to teach yourself new skills, practice consistently, and adopt habits that will make you a stronger, more independent learner.
          </p>

          <p className="text-base">
            By the end of this week, you won’t just know what software is—you will begin <strong>thinking like a software engineer</strong>. You will understand how computers and the internet work, and you will have the mindset needed to tackle programming challenges with confidence. This foundation will prepare you for the weeks ahead, where you will start turning theory into practical skills that can change the way you see technology—and the world.
          </p>

          <p className="text-base">
            To make the most of this week, read each topic in your resources carefully, watch the supporting videos, and take notes. Try to connect what you learn with real-life examples, and challenge yourself with the chapter review quizzes.
          </p>
        </div>

        {/* Resource Links */}
        <div className="mb-6">
          <h3 className="font-semibold text-md mb-2 text-gray-800">Resources</h3>
          <div className="space-y-3">
            {resources
              .filter(item => item.id >= 1 && item.id <= 4)
              .map((item, i) => (
                <Link
                  key={i}
                  href={`/my-course/aice-sef/${item.name}`}
                  className="block p-3 rounded-md border border-gray-200 bg-gray-50 hover:bg-[#195C49] hover:text-white transition-colors shadow-sm text-sm font-medium"
                >
                  {i + 1}. {item.name}
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
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Software Engineering Introduction"
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
              <h2 className="text-lg font-semibold">Quiz: Test Your Understanding</h2>

              <button
                onClick={() => setShowQuiz(prev => !prev)}
                className="text-sm text-[#195C49] underline"
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
                {filteredQuiz.map(q => {
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
                    You scored {score} out of {filteredQuiz.length}
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
