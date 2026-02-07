"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-white font-bold" : "text-gray-200";

  return (
    <nav className="bg-green-700 shadow-md py-4 px-8 rounded-lg mb-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/amazon.jpg" alt="Logo" width={100} height={50} />
        </div>

        {/* Menu */}
        <div className="flex space-x-9 font-medium">
          <Link href="/" className={`hover:text-white ${isActive("/")}`}>
            Home
          </Link>
          <Link href="/about-us" className={`hover:text-white ${isActive("/about-us")}`}>
            About-Us
          </Link>
          <Link href="/course" className={`hover:text-white ${isActive("/course")}`}>
            Course
          </Link>
          <Link href="/project" className={`hover:text-white ${isActive("/project")}`}>
            Project
          </Link>
        </div>

        {/* Register Button */}
        <Link
          href="/register"
          className="bg-yellow-400 text-green-800 font-semibold px-5 py-2 rounded-lg hover:bg-green-300 transition"
        >
          ثبت‌نام کنید
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;