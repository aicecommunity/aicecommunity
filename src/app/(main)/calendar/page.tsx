'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Example calendar data
const events = [
  { date: "2025-04-01", title: "Why TypeScript? Benefits over JavaScript", color: "bg-green-100" },
  { date: "2025-04-04", title: "Installing TypeScript and setting up a compiler (tsc)", color: "bg-red-100" },
  { date: "2025-04-06", title: "Working with .ts files and transpiling to JS", color: "bg-white" },
  { date: "2025-04-08", title: "Basic types: number, string, boolean, any, unknown", color: "bg-yellow-100" },
  { date: "2025-04-14", title: "Arrays, tuples, and enums", color: "bg-pink-100" },
  { date: "2025-04-18", title: "Type inference vs. explicit typing", color: "bg-pink-100" },
  { date: "2025-04-20", title: "Typing function parameters and return types", color: "bg-yellow-100" },
  { date: "2025-04-23", title: "Optional and default parameters", color: "bg-green-100" },
  { date: "2025-04-26", title: "Object types and nested type structures", color: "bg-red-100" },
  { date: "2025-04-29", title: "Interfaces vs. type aliases", color: "bg-yellow-100" },
];

function generateCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // weekday of 1st
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return weeks;
}

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-based)
  const [currentYear, setCurrentYear] = useState(2025);

  const weeks = generateCalendar(currentYear, currentMonth);

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base sm:text-lg font-medium">
          {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })}, {currentYear}
        </h2>

        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={handlePrev} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft size={18} />
          </button>
          <button onClick={handleNext} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Calendar Wrapper (scrollable on mobile) */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 min-w-[700px] border border-gray-200 rounded-md">
          {/* Weekday headers */}
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, i) => (
            <div
              key={i}
              className="text-center font-medium py-2 border-b border-r text-gray-600 text-xs sm:text-sm"
            >
              <span className="sm:hidden">{day[0]}</span> {/* Short version on mobile */}
              <span className="hidden sm:inline">{day}</span>
            </div>
          ))}

          {/* Days */}
          {weeks.map((week, wi) =>
            week.map((day, di) => {
              const dateStr = day ? `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` : "";
              const event = events.find((e) => e.date === dateStr);

              return (
                <div
                  key={`${wi}-${di}`}
                  className={`h-20 sm:h-28 border-r border-b p-1 sm:p-2 text-xs sm:text-sm relative ${event ? event.color : ""}`}
                >
                  {day && <div className="text-gray-700 font-semibold">{day}</div>}
                  {event && (
                    <div className="mt-1 text-[0.5rem] md:text-xs">{event.title}</div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
