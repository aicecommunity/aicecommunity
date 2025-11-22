// src/app/(main)/my-course/aice-sef/[file]/page.tsx

"use client";

import { use } from "react";
import dynamic from "next/dynamic";
import { resources } from "../aice-sef-courses";

const ReaderClient = dynamic(
  () => import("@/app/(main)/components/common/ReaderClient"),
  { ssr: false }
);

export default function Page({ params }: { params: Promise<{ file: string }> }) {
    const { file } = use(params);

    const requestedName = decodeURI(file);

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
