// -------------------------- کدهای فعلی---------------------------
// src/app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 1. دیو سفید پس‌زمینه با سایه ملایم روی هیرو */}
      {/* // بخش مربوط به دیو سفید در خروجی Header */}
      <div
        className={`
    w-full transition-all duration-500 flex justify-center items-center fixed top-0 left-0 right-0
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    ${
      scrolled
        ? "h-20 bg-white/70 backdrop-blur-md" // در حالت اسکرول: شفاف و بلور
        : "h-28 bg-white" // در حالت عادی: سفید خالص
    }
  `}
      >
        <GreenNav scrolled={scrolled} />
      </div>
    </header>
  );
}

function GreenNav({ scrolled }: { scrolled: boolean }) {
  return (
    <nav
      dir="rtl"
      className={`
        transition-all duration-500 ease-in-out
        rounded-full bg-primary-500
        flex items-center justify-between
        shadow-md :
        ${
          scrolled
            ? "w-[90%] max-w-6xl px-8 py-1.5"
            : "w-[94%] max-w-7xl px-10 py-2.5"
        }
      `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Amazon Tech"
          width={scrolled ? 50 : 60}
          height={scrolled ? 50 : 60}
          className="object-contain transition-all duration-500"
          priority
        />
      </Link>

      {/* Menu */}
      <ul className="flex items-center gap-10 text-white text-sm font-medium">
        <li>
          <Link href="/" className="hover:text-yellow-300 transition">
            خانه
          </Link>
        </li>
        <li>
          <Link href="/courses" className="hover:text-yellow-300 transition">
            دوره‌های آموزشی
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-yellow-300 transition">
            پروژه‌ها
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-300 transition">
            درباره ما
          </Link>
        </li>
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className={`rounded-full bg-yellow-400 font-semibold text-emerald-900 hover:bg-yellow-300 transition-all duration-500
          ${scrolled ? "px-5 py-1.5 text-xs" : "px-6 py-2 text-sm"}`}
      >
        ارتباط با ما
      </Link>
    </nav>
  );
}