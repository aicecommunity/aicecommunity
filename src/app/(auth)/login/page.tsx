'use client'

import Image from "next/image";
import { useState } from "react";
import auth_logo from '@/images/aice_logo.png';
import auth_bg from '@/images/auth_bg.png';
import show_pswd from '@/images/show_pswd.png';
import hide_pswd from '@/images/hide_pswd.png';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <form action="" method="post" className="w-full max-w-md">
        <article className="bg-[#EEECEC] rounded-xl py-8 px-6 shadow-md flex flex-col gap-6">
          
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

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-sm">Password</label>
            <div className="flex items-center border border-black rounded-md px-2">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
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
            
            <div className="text-xs flex justify-end mt-1 font-medium">
                <Link href={'/forget-password'}>Forget Password?</Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={(e)=>{e.preventDefault(); router.replace('/dashboard')}}
            type="submit"
            className="w-full h-12 bg-[#195C49] text-lg font-semibold text-white rounded-lg hover:bg-[#124233] transition-colors"
          >
            Log in
          </button>

          {/* Sign up link */}
          <p className="text-center mt-2 text-sm font-semibold">
            Don&apos;t have an account?{" "}
            <Link href={'/signup'} className="text-[#195C49] font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </article>
      </form>
    </section>
  );
}
