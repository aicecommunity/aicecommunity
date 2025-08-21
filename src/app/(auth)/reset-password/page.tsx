'use client'

import Image from "next/image";
import { useState } from "react";
import auth_logo from '@/images/aice_logo.png';
import show_pswd from '@/images/show_pswd.png';
import hide_pswd from '@/images/hide_pswd.png';
import { useRouter } from "next/navigation";


export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter()

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <form action="" method="post" className="w-full max-w-md">
        <article className="bg-[#EEECEC] rounded-xl py-8 px-6 shadow-md flex flex-col gap-6">
          
          {/* Logo */}
          <header className="flex justify-center">
            <Image src={auth_logo} alt="auth_logo" className="w-[160px] h-auto" />
          </header>

          {/* New Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-sm">New Password</label>
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
          </div>
        
            {/* Confirm Password */}
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

          {/* Submit Button */}
          <button
            onClick={(e)=>{e.preventDefault(); router.push('/login')}}
            type="submit"
            className="w-full h-12 bg-[#195C49] text-lg font-semibold text-white rounded-lg hover:bg-[#124233] transition-colors"
          >
            Confirm
          </button>
        </article>
      </form>
    </section>
  );
}
