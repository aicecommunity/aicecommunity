'use client';
import React from 'react';
import profile_banner from '@/images/profile_banner.png'
import profile_pic from '@/images/profile_pic.png'

export default function ProfilePage (){
  return (
    <div className="flex flex-col space-y-8 p-6">
      {/* Cover Image */}
        <div className="relative w-full h-[220px]">
        <div
            className="w-full h-full rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-start px-5 text-white text-[60px] md:text-[100px] lg:text-[140px] font-bold"
            style={{ backgroundImage: `url(${profile_banner.src})` }}
        >
            <p className="opacity-60">AFRICA</p>
        </div>

        {/* Avatar */}
        <div className="absolute -bottom-12 right-12 flex flex-col items-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
            <img
                src={profile_pic.src}
                alt="Avatar"
                className="object-cover w-full h-full"
            />
            <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full border shadow-sm">
                <i className="bi bi-camera-fill text-gray-700"></i>
            </button>
            </div>
        </div>
        </div>



      <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Form */}
        <div className="bg-[#EEECEC] rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              disabled
              value="Ngozi"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Middle Name</label>
            <input
              disabled
              value="Adeniyi"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              disabled
              value="Olagunju"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              disabled
              value="ngozi@gmail.com"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">AiCE ID</label>
            <input
              disabled
              value="AiCE/2025/001/0043"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>
        </div>

        {/* Right Form  */}
        <div className="bg-[#EEECEC] rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Country of Residence
            </label>
            <input
              
              value="Nigeria"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">LinkedIn</label>
            <input
              
              value="https://www.linkedin.com/in/ngozi/"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">GitHub</label>
            <input
              
              value="https://github.com/ngozi"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Whatsapp</label>
            <input
              
              value="+2348103230934"
              className="w-full border rounded-lg px-3 py-2 bg-transparent border-gray-300"
            />
          </div>

          <button className="mt-4 w-[120px] bg-[#195C49] hover:bg-green-700 text-white py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};


