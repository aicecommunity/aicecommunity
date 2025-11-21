// src/app/(main)/my-course/aice-sef/[file]/page.tsx

import ReaderClient from "@/app/(main)/components/common/ReaderClient";
import { resources } from "../aice-sef-courses";

export default function Page({ params }: { params: { file: string } }) {

    // Decode the file name from the URL
    const requestedName = decodeURI(params.file);

    // Find the resource by name
    const selected = resources.find(
        r => r.name.toLowerCase() === requestedName.toLowerCase()
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
