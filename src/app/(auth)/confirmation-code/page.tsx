'use client'

import Image from "next/image";
import auth_logo from '@/images/aice_logo.png';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmationCode() {
  const router = useRouter()
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [counter]);

  const handleResend = () => {
    // 🔹 Call API or logic to resend code here
    console.log("Resend code requested");
    setCounter(30); // restart countdown
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <form
        action=""
        method="post"
        className="bg-[#EEECEC] w-full max-w-md rounded-xl py-8 px-6 shadow-md flex flex-col gap-6"
      >
        {/* Logo */}
        <header className="flex justify-center">
          <Image src={auth_logo} alt="auth_logo" className="w-[160px] h-auto" />
        </header>

        <article>
          <h3 className="font-semibold text-lg text-center">
            We&apos;ve sent a code to your email.
          </h3>
          <p className="text-xs text-center">
            A verification code has been sent to your email. Check your inbox and enter the code here.
          </p>
        </article>

        {/* Code input */}
        <div>
          <label htmlFor="code" className="block mb-1 font-medium text-sm">Enter Code</label>
          <input
            id="code"
            name="code"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
            className="w-full h-11 px-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
        </div>

        {/* Resend code with countdown */}
        <p className="text-center mt-2 text-sm font-semibold">
          Didn&apos;t receive the code?{" "}
          {counter > 0 ? (
            <span className="text-gray-500">Resend in {counter}s</span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-[#195C49] font-medium hover:underline"
            >
              Resend code
            </button>
          )}
        </p>

        {/* Submit Button */}
        <button
          onClick={(e)=>{e.preventDefault(); router.push('/reset-password')}}
          type="submit"
          className="w-full h-12 bg-[#195C49] text-lg font-semibold text-white rounded-lg hover:bg-[#124233] transition-colors"
        >
          Confirm
        </button>
      </form>
    </section>
  );
}
