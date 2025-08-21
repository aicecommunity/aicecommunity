'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";


// ✅ Dashboard sub-components
import Sidebar from "./Sidebar";
import Header from "./Header";


// ✅ Images
import profile_pic from '@/images/profile_pic.png'
import aice_logo from '@/images/aice_logo.png'

// sidebar icons
import all_courses_black from '@/images/sidebar/all_courses_black.png'
import all_courses_white from '@/images/sidebar/all_courses_white.png'
import calendar_black from '@/images/sidebar/calendar_black.png'
import calendar_white from '@/images/sidebar/calendar_white.png'
import certificates_black from '@/images/sidebar/certificates_black.png'
import certificates_white from '@/images/sidebar/certificates_white.png'
import home_black from '@/images/sidebar/home_black.png'
import home_white from '@/images/sidebar/home_white.png'
import my_course_black from '@/images/sidebar/my_course_black.png'
import my_course_white from '@/images/sidebar/my_course_white.png'
import peers_black from '@/images/sidebar/peers_black.png'
import peers_white from '@/images/sidebar/peers_white.png'
import profile_black from '@/images/sidebar/profile_black.png'
import profile_white from '@/images/sidebar/profile_white.png'
import settings_black from '@/images/sidebar/settings_black.png'
import settings_white from '@/images/sidebar/settings_white.png'

export default function MainLayout({children}: {children: React.ReactNode}){
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { href: "/dashboard", label: "Home", icon: { active: home_white, inactive: home_black } },
        { href: "/calendar", label: "Calendar", icon: { active: calendar_white, inactive: calendar_black } },
        { href: "/my-course", label: "My Course", icon: { active: my_course_white, inactive: my_course_black } },
        { href: "/all-courses", label: "All Courses", icon: { active: all_courses_white, inactive: all_courses_black } },
        { href: "/certificates", label: "Certificates", icon: { active: certificates_white, inactive: certificates_black } },
        { href: "/peers", label: "Peers", icon: { active: peers_white, inactive: peers_black } },
        { href: "/profile", label: "Profile", icon: { active: profile_white, inactive: profile_black } },
        { href: "/settings", label: "Settings", icon: { active: settings_white, inactive: settings_black } },
    ];
    return(
        <div className="flex h-screen bg-gray-50 relative">
            {/* Sidebar */}
            <Sidebar
                navItems={navItems}
                pathname={pathname}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                logo={aice_logo}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Header */}
                <Header
                onMenuClick={() => setSidebarOpen(true)}
                profilePic={profile_pic}
                name="Ngozi Adeniyi Olagunju"
                />

                {children}
            </div>
      

        </div>
    )
}