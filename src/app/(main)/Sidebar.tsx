'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";



interface NavItem {
  href: string;
  label: string;
  icon: {
    active: string | StaticImageData;
    inactive: string | StaticImageData;
  };
}

type LogoType = string | StaticImageData;

export default function Sidebar({
  navItems,
  pathname,
  sidebarOpen,
  setSidebarOpen,
  logo,
}: {
  navItems: NavItem[];
  pathname: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  logo: LogoType;
}) {
  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-[#EEECEC] rounded-r-2xl shadow-md flex flex-col justify-between z-50 lg:hidden"
          >
            <div>
              <div className="flex items-center justify-between px-4 py-6">
                <Image src={logo} alt="AiCE" className="w-auto h-[50px]" />
                <button onClick={() => setSidebarOpen(false)}>
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              <NavList
                navItems={navItems}
                pathname={pathname}
                onClick={() => setSidebarOpen(false)}
              />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col justify-between w-64 bg-[#EEECEC] rounded-r-2xl shadow-md">
        <div>
          <div className="flex items-center gap-2 px-4 py-6">
            <Image src={logo} alt="AiCE" className="w-auto h-[50px]" />
          </div>
          <NavList navItems={navItems} pathname={pathname} />
        </div>
      </div>
    </>
  );
}

function NavList({
  navItems,
  pathname,
  onClick,
}: {
  navItems: NavItem[];
  pathname: string;
  onClick?: () => void;
}) {
  return (
    <nav className="flex flex-col mt-5 space-y-2 px-4">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`w-full flex gap-2 items-center rounded-lg px-2 py-2 transition-colors 
              ${active ? "bg-[#195C49] text-white" : "hover:bg-gray-100"}`}
          >
            <Image
              src={active ? item.icon.active : item.icon.inactive}
              alt={item.label}
              className="w-[20px] h-auto"
            />
            <p>{item.label}</p>
          </Link>
        );
      })}
    </nav>
  );
}
