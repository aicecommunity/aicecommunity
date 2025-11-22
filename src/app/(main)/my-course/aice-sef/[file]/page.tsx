// src/app/(main)/my-course/aice-sef/[file]/page.tsx

"use client";

import { use } from "react";
import ReaderClient from "@/app/(main)/components/common/ReaderClient";
import { resources } from "../aice-sef-courses";

export default function Page({ params }: { params: Promise<{ file: string }> }) {
    // unwrap params
    const { file } = use(params);

    // Decode from URL
    const requestedName = decodeURI(file);

    // Find the resource
    const selected = resources.find(
        (r) => r.name.toLowerCase() === requestedName.toLowerCase()
    );

    if (!selected) {
        return (
            <div className="flex items-center justify-center h-screen text-xl text-red-500">
                File not found — check the URL
            </div>
        );
    }

    return (
        <div className="h-screen w-full">
            <ReaderClient file={selected.file} />
        </div>
    );
}

