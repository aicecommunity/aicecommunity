"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsContent() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const router = useRouter()

  return (
    <div className="flex flex-col gap-10 py-6">
      {/* Change Password Section */}
      <section className="">
        <h2 className="text-lg font-semibold flex items-center px-6 gap-2 mb-4 pb-4 border-b border-solid">
          <span role="img" aria-label="lock">🔒</span>
          Change Password
        </h2>

        <div className="space-y-4 md:w-[517px] mx-6">
          {/* Current Password */}
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showPassword.current ? "text" : "password"}
                placeholder="Enter current password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() =>
                  setShowPassword({ ...showPassword, current: !showPassword.current })
                }
              >
                {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showPassword.new ? "text" : "password"}
                placeholder="Enter new password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() =>
                  setShowPassword({ ...showPassword, new: !showPassword.new })
                }
              >
                {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Re-enter new password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() =>
                  setShowPassword({ ...showPassword, confirm: !showPassword.confirm })
                }
              >
                {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button className="mt-2 bg-[#195C49] hover:bg-green-700">Save</Button>
        </div>
      </section>

      {/* Public & Certificate Name Section */}
      <section className="">
        <h2 className="text-lg font-semibold flex items-center px-6 gap-2 mb-4 pb-4 border-b border-solid">
          <span role="img" aria-label="graduate">👨‍🎓</span>
          Public & Certificate Name
        </h2>

        <div className="space-y-4 md:w-[517px] mx-6">
          {/* Preferred First Name */}
          <div className="space-y-2">
            <Label htmlFor="preferredName">Preferred First Name</Label>
            <Input
              id="preferredName"
              defaultValue="Ngozi"
              placeholder="Enter preferred first name"
            />
            <p className="text-xs text-gray-500 mt-1">
              (This name will be used when peers or admins refer to you)
            </p>
          </div>

          {/* Certificate Name */}
          <div className="space-y-2">
            <Label htmlFor="certificateName">Certificate Name</Label>
            <Input
              id="certificateName"
              defaultValue="Ngozi Adeniyi Olagunju"
              placeholder="Enter full name for certificate"
            />
            <p className="text-xs text-gray-500 mt-1">
              (This name will appear on your certificate exactly as typed)
            </p>
          </div>

          <Button className="mt-2 bg-[#195C49] hover:bg-green-700">Save</Button>
        </div>
      </section>

     <Button 
        onClick={(e)=>{e.preventDefault(); router.replace('/')}}
        className="mt-2 bg-[#FFCCCC] font-semibold text-[#B91C1C] self-end mx-6 hover:bg-[#DC2626] hover:text-white"
        >
        Log out
    </Button>


    </div>
  );
}
