"use client";

import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

interface ReaderClientProps {
  file: string;
}

export default function ReaderClient({ file }: ReaderClientProps) {
  if (!file) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-xl">No book selected</p>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <main className="flex-1 overflow-auto min-h-0">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={file}
            defaultScale={SpecialZoomLevel.PageWidth}
            renderLoader={() => (
              <div className="flex items-center justify-center h-full">
                <div className="w-12 h-12 rounded-full animate-spin border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent"></div>
              </div>
            )}
          />
        </Worker>
      </main>
    </div>
  );
}
