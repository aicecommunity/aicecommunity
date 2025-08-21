'use client'

import Image from "next/image";
import { useState } from "react";
import auth_logo from '@/images/aice_logo.png';
import auth_bg from '@/images/auth_bg.png';
import show_pswd from '@/images/show_pswd.png';
import hide_pswd from '@/images/hide_pswd.png';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter()

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <header className="flex justify-center mb-6">
        <Image src={auth_logo} alt="auth_logo" className="w-[160px] h-auto" />
      </header>

      <form action="" method="post" className="w-full max-w-5xl">
        <section className="flex flex-col md:flex-row gap-x-6 gap-y-3 w-full mb-6 
                            bg-[#EEECEC] md:bg-transparent rounded-xl py-4 md:py-0 px-4 md:px-0 shadow-md md:shadow-none">
          {/* Left Section */}
          <article className="md:bg-[#EEECEC] rounded-xl md:py-4 md:px-4 flex-1 md:shadow-md">
            <div className="mb-3">
              <label htmlFor="firstName" className="block mb-1 font-medium text-sm">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="w-full h-11 px-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="block mb-1 font-medium text-sm">Middle Name</label>
              <input
                id="middleName"
                name="middleName"
                type="text"
                className="w-full h-11 px-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="block mb-1 font-medium text-sm">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="w-full h-11 px-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
            <div>
              <label htmlFor="country" className="block mb-1 font-medium text-sm">Country of Residence</label>
              <input
                id="country"
                name="country"
                type="text"
                className="w-full h-11 px-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
          </article>

          {/* Right Section */}
          <article className="md:bg-[#EEECEC] rounded-xl md:py-4  md:px-4 flex-1 md:shadow-md">
            <div className="mb-3">
              <label htmlFor="email" className="block mb-1 font-medium text-sm">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full h-11 px-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="whatsapp" className="block mb-1 font-medium text-sm">WhatsApp Number</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                className="w-full h-11 px-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block mb-1 font-medium text-sm">Password</label>
              <div className="flex items-center border border-black rounded-md px-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  className="w-full h-11 px-1 focus:outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Image
                    src={showPassword ? hide_pswd : show_pswd}
                    alt="toggle password"
                    className="w-4 h-auto"
                  />
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-1 font-medium text-sm">Confirm Password</label>
              <div className="flex items-center border border-black rounded-md px-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  className="w-full h-11 px-1 focus:outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Image
                    src={showConfirmPassword ? hide_pswd : show_pswd}
                    alt="toggle confirm password"
                    className="w-4 h-auto"
                  />
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* Submit Button */}
        <button
          onClick={(e)=>{e.preventDefault(); router.replace('/login')}}
          type="submit"
          className="w-full h-14 bg-[#195C49] text-lg font-semibold text-white rounded-lg hover:bg-[#124233] transition-colors"
        >
          Sign up
        </button>
      </form>

      <p className="text-center mt-4 text-sm font-semibold">
        Already have an account?{" "}
        <Link href={'/login'} className="text-[#195C49] font-medium hover:underline">
          Log in
        </Link>
      </p>
    </section>
  );
}
