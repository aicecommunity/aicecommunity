'use client'

import Image from "next/image";
import auth_logo from '@/images/aice_logo.png';
import { useRouter } from "next/navigation";

export default function ForgetPassword() {
  const router = useRouter()
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

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-sm">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full h-11 px-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={(e)=>{e.preventDefault(); router.push('/confirmation-code')}}
          type="submit"
          className="w-full h-12 bg-[#195C49] text-lg font-semibold text-white rounded-lg hover:bg-[#124233] transition-colors"
        >
          Confirm
        </button>
      </form>
    </section>
  );
}
