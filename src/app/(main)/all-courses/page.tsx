'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import intro from '@/images/all_courses/intro.png'
import expo from '@/images/all_courses/expo.png'
import figma from '@/images/all_courses/figma.png'
import frontend from '@/images/all_courses/frontend.png'
import backend from '@/images/all_courses/backend.jpg'


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
    title: "SOFTWARE ENGINEERING FOUNDATIONS",
    code: "AICE-SEF",
    description: "This course introduces students to the core principles, tools, and mindset required to begin a career in software engineering. It blends African technological history with practical skills in Linux, Git, Python, JavaScript, and databases. By the end of the program, learners are fully prepared to enter any of the AICE specialization tracks.",
    duration: "12 Weeks",
    level: "Foundation",
    status: "Completed",
    image: intro.src,
    category: "All",
  },
  {
    id: 2,
    title: "UI/UX DESIGN",
    code: "AICE-UIUX",
    description: "Students explore the fundamentals of digital product design, focusing on user research, design thinking, visual design, and accessibility. Using Figma, they learn to create professional prototypes and design systems while building strong portfolio-ready projects.",
    duration: "8 Weeks",
    level: "Specialization",
    status: "Completed",
    image: figma.src,
    prerequisite: "AICE-SEF",
    category: "UI/UX Design",
  },
  {
    id: 3,
    title: "FRONTEND WEB DEVELOPMENT",
    code: "AICE-FE",
    description: "This course trains students to build responsive and interactive web interfaces using HTML, CSS, Tailwind, JavaScript, React, and Next.js. Learners gradually progress from foundational layout techniques to modern component-based development and deployment of production-ready applications.",
    duration: "16 Weeks",
    level: "Specialization",
    status: "Continue",
    image: frontend.src,
    prerequisite: "AICE-SEF",
    category: "Frontend Development",
  },
  {
    id: 4,
    title: "BACKEND SOFTWARE DEVELOPMENT",
    code: "AICE-BE",
    description: "Students gain the skills to design and develop scalable server-side applications using Django and Express. The course covers API development, authentication, database integration, and deployment, culminating in a fully functional backend project.",
    duration: "16 Weeks",
    level: "Specialization",
    status: "Start",
    image: backend.src,
    prerequisite: "AICE-SEF",
    category: "Backend Development",
  },
  {
    id: 5,
    title: "MOBILE APP DEVELOPMENT",
    code: "AICE-MOBILE",
    description: "Learners are introduced to cross-platform mobile engineering with React Native and Expo. The course covers interface development, app navigation, backend integration, device features, and app deployment for Android and iOS. Students complete a professional mobile app project.",
    duration: "12 Weeks",
    level: "Specialization",
    status: "Start",
    image: expo.src,
    prerequisite: "AICE-SEF",
    category: "Mobile Development",
  },
];

const categories = [
  "All",
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
    <div className="flex-1 md:p-6 p-3">
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
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
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
                <h3 className="md:text-[1rem] text-[0.8rem] font-semibold w-[75%]">{course.title}</h3>
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
