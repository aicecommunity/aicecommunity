'use client';

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"; // spinner icon

export default function RunCodeCheckerPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => {
    setLoading(true);
    setShowResults(false);

    // Simulate backend check (4s)
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 4000);
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        className="bg-[#195C49] w-[12rem] text-white px-4 py-2 rounded-md hover:bg-green-700"
        onClick={() => {
          setOpen(true);
          setShowResults(false);
          setLoading(false);
        }}
      >
        Run Code Checker
      </Button>

      {/* Popup Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl p-6">
          <DialogHeader className="flex justify-between items-center">
            <DialogTitle className="text-base font-semibold">
              AiCE-INT-TS-2.1 Typing function parameters and return types
            </DialogTitle>
          </DialogHeader>

          {/* Score */}
          {showResults && (
            <div className="text-center text-2xl font-bold mt-2 mb-4">60%</div>
          )}

          {/* Start / Cancel buttons */}
          {!loading && !showResults && (
            <div className="flex justify-center gap-4 mb-6">
              <Button
                onClick={handleStart}
                className="bg-green-600 hover:bg-green-700 px-6 w-[7rem]"
              >
                Start
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="destructive"
                className="px-6 w-[7rem]"
              >
                Cancel
              </Button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-10">
              <Loader2 className="animate-spin text-[#195C49] w-10 h-10 mb-3" />
              <p className="text-sm text-gray-600">Checking your code...</p>
            </div>
          )}

          {/* Results */}
          {showResults && (
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg border">
              <div className="flex items-start gap-2 p-2 rounded-md bg-green-100 border border-green-300">
                <span className="text-green-600">✔</span>
                <p className="text-sm">Colon-typed parameters are present</p>
              </div>
              <div className="flex items-start gap-2 p-2 rounded-md bg-green-100 border border-green-300">
                <span className="text-green-600">✔</span>
                <p className="text-sm">Return type is explicitly declared</p>
              </div>
              <div className="flex items-start gap-2 p-2 rounded-md bg-green-100 border border-green-300">
                <span className="text-green-600">✔</span>
                <p className="text-sm">return keyword is present</p>
              </div>

              <div className="flex flex-col p-2 rounded-md bg-red-100 border border-red-300">
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✘</span>
                  <p className="text-sm font-medium">
                    Conditional logic (e.g., if, else, or ternary operator) is present
                  </p>
                </div>
                <p className="text-xs text-gray-700 mt-1 ml-6">
                  You&apos;re supposed to return different messages based on the user&apos;s age.
                  Try using an if statement or a ternary operator to check if age ≥ 18 before deciding what to return.
                </p>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-md bg-red-100 border border-red-300">
                <span className="text-red-600">✘</span>
                <p className="text-sm">console.log() is present</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
