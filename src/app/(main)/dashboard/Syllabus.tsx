import { Card, CardContent } from "@/components/ui/card";

export default function Syllabus(){
    return(
        <Card className="bg-[#EEECEC] lg:col-span-2">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Syllabus</h3>
              <p className="text-sm font-semibold">Aug 5, 2025 | Week 1: Getting Started with TypeScript</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mb-3">
                <li>Why TypeScript? Benefits over JavaScript</li>
                <li>Installing TypeScript and compiler setup</li>
                <li>Working with .ts files and transpiling</li>
                <li>Basic types, arrays, tuples, enums</li>
                <li>Type inference vs explicit typing</li>
              </ul>

              <p className="text-sm font-semibold">Aug 12, 2025 | Week 2: Functions, Objects & Interfaces</p>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Typing function parameters and return types</li>
                <li>Optional and default parameters</li>
                <li>Object types and nested type structures</li>
                <li>Interfaces vs. type aliases</li>
                <li>Union & Literal types</li>
                <li>Type narrowing & type guards</li>
                <li>Practice: Build a Todo app</li>
              </ul>
            </CardContent>
        </Card>
    )
}