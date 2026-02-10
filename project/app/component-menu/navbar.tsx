"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Form from "./form";

function Navbar() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const isActive = (path: string) =>
    pathname === path ? "text-white font-bold" : "text-gray-200";

  return (
    <>
      <nav className="bg-green-700 shadow-md py-4 px-8 rounded-lg mb-1">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Image src="/amazon.jpg" alt="Logo" width={100} height={50} />

          {/* Menu */}
          <div className="flex space-x-9 font-medium">
            <Link href="/" className={isActive("/")}>Home</Link>
            <Link href="/about-us" className={isActive("/about-us")}>About-Us</Link>
            <Link href="/course" className={isActive("/course")}>Course</Link>
            <Link href="/project" className={isActive("/project")}>Project</Link>
          </div>

          {/* Register Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-400 text-green-800 font-semibold px-5 py-2 rounded-lg hover:bg-green-300 transition"
          >
            ثبت‌نام کنید
          </button>
        </div>
      </nav>

      {/* ✅ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl relative w-[400px]">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-red-500 font-bold"
            >
              ✕
            </button>

            <Form />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
