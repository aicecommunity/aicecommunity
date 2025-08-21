'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import intro from '@/images/all_courses/intro.png'
import django from '@/images/all_courses/django.png'
import expo from '@/images/all_courses/expo.png'
import figma from '@/images/all_courses/figma.png'
import flask from '@/images/all_courses/flask.png'
import frontend from '@/images/all_courses/frontend.png'
import js from '@/images/all_courses/js.png'
import nestjs from '@/images/all_courses/nestjs.png'
import nextjs from '@/images/all_courses/nextjs.png'
import py from '@/images/all_courses/py.png'
import sql from '@/images/all_courses/sql.png'
import ts from '@/images/all_courses/ts.png'

interface Course {
  id: number;
  title: string;
  code: string;
  description: string;
  duration: string;
  level: string;
  status: "Completed" | "Continue" | "Start";
  image: string;
  prerequisite?: string;
  category: "All" | "Programming Languages" | "Frontend Development" | "Backend Development" | "Mobile Development" | "UI/UX Design";
}

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Software Engineering",
    code: "AICE-ENG-INTRO",
    description: "Discover Africa’s past and future, and how technology can help it reclaim global influence. Become an engineer solving African challenges, while exploring software engineering fields, career paths, and mastering essential tools like Linux, VIM and Git",
    duration: "4 weeks",
    level: "Foundation",
    status: "Completed",
    image: intro.src,
    category: "All",
  },
  {
    id: 2,
    title: "JavaScript Programming",
    code: "AICE-JS",
    description: "Learn JavaScript — the essential programming language for web development. Master variables, functions, control flow, objects, arrays, and ES6+ features to build a solid foundation and confidently step into React.",
    duration: "3 weeks",
    level: "Intermediate",
    status: "Completed",
    image: js.src,
    category: "Programming Languages",
  },
  {
    id: 3,
    title: "TypeScript Programming",
    code: "AICE-TS",
    description: "Learn TypeScript — a strongly typed superset of JavaScript that enhances code safety, scalability, and developer productivity. Master static types, interfaces, generics, decorators, and modern JavaScript features, preparing you to build robust Next.js frontends and scalable NestJS backends with confidence.",
    duration: "2 weeks",
    level: "Intermediate",
    status: "Continue",
    image: ts.src,
    prerequisite: "AICE-JS",
    category: "Programming Languages",
  },
  {
    id: 4,
    title: "Python Programming",
    code: "AICE-PY",
    description: "Learn the art of programming with Python — the language that powers AI, automation, data science, and web applications. Master clean syntax, data structures, control flow, functions, and object-oriented programming, gaining a strong foundation to explore backend and other real-world applications.",
    duration: "4 weeks",
    level: "Intermediate",
    status: "Start",
    image: py.src,
    prerequisite: "AICE-ENG-INTRO",
    category: "Programming Languages",
  },
  {
    id: 5,
    title: "Database Development",
    code: "AICE-DB",
    description: "Understand how data is stored, retrieved, and managed in modern applications. Learn SQLite and MySQL fundamentals, relational database design, and how to connect and interact with databases using Python to build efficient, data-driven solutions.",
    duration: "2 weeks",
    level: "Intermediate",
    status: "Start",
    image: sql.src,
    prerequisite: "AICE-PY",
    category: "Programming Languages",
  },
  {
    id: 6,
    title: "UI/UX Design",
    code: "AICE-UIUX",
    description: "Design with empathy and clarity. Learn the fundamentals of UI/UX using Figma — wireframing, prototyping, color theory, spacing, and more — to craft visually appealing and user-friendly experiences.",
    duration: "6 weeks",
    level: "Specialization",
    status: "Start",
    image: figma.src,
    prerequisite: "AICE-ENG-INTRO",
    category: "UI/UX Design",
  },
  {
    id: 7,
    title: "Frontend Development",
    code: "AICE-FRONTEND",
    description: "Build responsive user interfaces using HTML, CSS, Tailwind CSS and React. Learn how real-world websites are structured and styled, and how to connect your frontend to APIs in preparation for backend integration.",
    duration: "6 weeks",
    level: "Specialization",
    status: "Start",
    image: frontend.src,
    prerequisite: "AICE-JS",
    category: "Frontend Development",
  },
  {
    id: 8,
    title: "Next.js Development",
    code: "AICE-NEXTJS",
    description: "Advance your React skills with Next.js, the framework for building fast, SEO-friendly, and scalable web apps. Master server-side rendering, static site generation, API routes, and advanced routing to create production-ready applications.",
    duration: "6 weeks",
    level: "Specialization",
    status: "Start",
    image: nextjs.src,
    prerequisite: "AICE-FRONTEND",
    category: "Frontend Development",
  },
  {
    id: 9,
    title: "Mobile Development",
    code: "AICE-MOBILE",
    description: "Build cross-platform mobile apps using React Native with Expo. Learn how to design, style, and integrate backend services to create fully functional mobile experiences.",
    duration: "6 weeks",
    level: "Specialization",
    status: "Start",
    image: expo.src,
    prerequisite: "AICE-FRONTEND",
    category: "Mobile Development",
  },
  {
    id: 10,
    title: "Backend with Flask",
    code: "AICE-FLASK",
    description: "Build lightweight yet powerful backend applications with Flask, a flexible Python microframework. Learn to design secure APIs, work with databases, handle authentication, and structure applications for scalability while keeping development fast and efficient.",
    duration: "6 weeks",
    level: "Specialization",
    status: "Start",
    image: flask.src,
    prerequisite: "AICE-PY",
    category: "Backend Development",
  },
  {
    id: 11,
    title: "Backend with Django",
    code: "AICE-DJANGO",
    description: "Develop robust backend applications with Django, a high-level Python framework that emphasizes rapid development and clean design. Learn to create secure APIs, manage databases with the ORM, handle authentication, and build scalable systems ready for production.",
    duration: "6 weeks",
    level: "Specialization",
    status: "Start",
    image: django.src,
    prerequisite: "AICE-PY",
    category: "Backend Development",
  },
  {
    id: 12,
    title: "Backend with NestJS",
    code: "AICE-NESTJS",
    description: "Build modern, enterprise-grade backend applications with NestJS, a powerful Node.js framework built with TypeScript. Learn to create secure APIs, connect to databases, manage authentication, and follow clean architecture patterns for scalable, maintainable systems.",
    duration: "6 weeks",
    level: "Specialization",
    status: "Start",
    image: nestjs.src,
    prerequisite: "AICE-JS",
    category: "Backend Development",
  },
];

const categories = [
  "All",
  "Programming Languages",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "UI/UX Design",
];

export default function AllCourses() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 p-6">
      {/* Title */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        {/* Left Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">All Courses</h2>
          <p className="text-gray-500 text-sm md:text-base">
            Browse the catalog and pick a path. Complete prerequisites to unlock specializations.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto flex items-center">
          <Input
            placeholder="Search courses"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:max-w-[14rem]"
          />
        </div>
      </header>


      {/* Categories Nav */}
      <nav className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-[7px] shadow text-sm font-medium ${
              activeCategory === cat
                ? "bg-[#195C49] text-white"
                : "bg-[#EEECEC] text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden p-0">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-auto object-cover"
            />
            <CardContent className="p-4 flex flex-col h-full">
            {/* Course Info */}
            <div className="flex-1">
              <div className='flex justify-between items-start mb-1'>
                <h3 className="text-[1rem] font-semibold w-[65%]">{course.title}</h3>
                <p className='text-[0.6rem] bg-[#EEECEC] py-1 px-2 rounded'>{course.code}</p>
              </div>
              <p className="text-sm text-gray-500 mb-3">{course.description}</p>
              <div className="text-sm mb-2">
                <p>Duration: {course.duration}</p>
                <p>Level: {course.level}</p>
                {course.prerequisite && (
                  <p>Prerequisite: {course.prerequisite}</p>
                )}
              </div>
            </div>

            {/* Button always at bottom */}
            <div className="mt-4">
              {course.status === "Completed" ? (
                <Button className="w-full bg-[#195C49] hover:bg-green-700">
                  Completed
                </Button>
              ) : course.status === "Continue" ? (
                <Button className="w-full bg-[#1E5F74] hover:bg-blue-700">
                  Continue
                </Button>
              ) : (
                <Button className="w-full bg-[#2E7D32] hover:bg-emerald-700">
                  Start
                </Button>
              )}
            </div>
          </CardContent>

          </Card>
        ))}
      </div>
    </div>
  );
}
