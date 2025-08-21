'use client';

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import RunCodeCheckerPopup from "./RunCodeCheckerPopup";

export default function MyCoursePage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswer = (qIndex: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: answer }));
  };

  const handleSubmitQuiz = () => {
    alert("Quiz submitted! (You can connect this to backend scoring later)");
  };

  return (
    <div className="p-6 space-y-8">
      {/* Course Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-lg sm:text-xl font-semibold leading-snug">
            TypeScript Programming - Week 2: Functions, Objects & Interfaces
        </h1>
        <div>
            <Select>
            <SelectTrigger className="w-full sm:w-[180px] bg-gray-100 text-gray-700 text-xs rounded">
                <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="ts-2-1">AICE-INT-TS-2.1</SelectItem>
                <SelectItem value="ts-2-2">AICE-INT-TS-2.2</SelectItem>
                <SelectItem value="ts-2-3">AICE-INT-TS-2.3</SelectItem>
            </SelectContent>
            </Select>
        </div>
        </div>


      {/* Lesson Card */}
      <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-200">
        <h2 className="font-semibold text-lg mb-2">
          AiCE-INT-TS-2.1 Typing function parameters and return types
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          TypeScript helps you write safer and more predictable code by letting you specify the types of data
          your functions receive and return. This means fewer bugs, better autocomplete, and easier debugging —
          especially in large projects. You&apos;ll use this skill in nearly every app you build, whether it&apos;s a calculator,
          a form handler, or an API.
        </p>

        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>How to define types for function parameters (e.g. name: string, age: number)</li>
          <li>How to specify a function&apos;s return type (e.g. : string, : void)</li>
          <li>The difference between implicit and explicit return types</li>
          <li>How type checking helps catch common errors before you even run the code</li>
        </ul>

        <button className="bg-[#195C49] w-[10rem] text-white px-4 py-2 rounded-md mb-4 hover:bg-green-700">
          Click to read
        </button>

        {/* Video Section */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-md overflow-hidden">
        <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Quiz: Test Your Understanding</h2>

        {/* Question 1 */}
        <div className="mb-4">
          <p className="font-medium mb-2">1. What is the correct way to type a function that takes two numbers and returns their sum?</p>
          {[
            "function add(a, b): number { return a + b }",
            "function add(a: string, b: string): string { return a + b }",
            "function add(a: number, b: number): number { return a + b }",
            "function add(a: any, b: any): any { return a + b }",
          ].map((opt, idx) => (
            <label key={idx} className="block text-sm mt-1">
              <input
                type="radio"
                name="q1"
                checked={selectedAnswers[1] === opt}
                onChange={() => handleAnswer(1, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Question 2 */}
        <div className="mb-4">
          <p className="font-medium mb-2">2. What does the <code>: void</code> return type in a function mean?</p>
          {[
            "The function returns a string",
            "The function throws an error",
            "The function does not return anything",
            "The function returns a number",
          ].map((opt, idx) => (
            <label key={idx} className="block text-sm mt-1">
              <input
                type="radio"
                name="q2"
                checked={selectedAnswers[2] === opt}
                onChange={() => handleAnswer(2, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Question 3 */}
        <div className="mb-4">
          <p className="font-medium mb-2">3. Which of the following functions has both properly typed parameters and return type?</p>
          {[
            'function greet(name, age): string { return "Hello " + name }',
            'function greet(name: string, age: number): string { return "Hello " + name }',
            'function greet(name: any, age: any): any { return name + age }',
            'function greet(name = string, age = number): string { return "Hi " + name }',
          ].map((opt, idx) => (
            <label key={idx} className="block text-sm mt-1">
              <input
                type="radio"
                name="q3"
                checked={selectedAnswers[3] === opt}
                onChange={() => handleAnswer(3, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>

        <button
          onClick={handleSubmitQuiz}
          className="bg-[#195C49] w-[10rem] text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Submit Quiz
        </button>
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
