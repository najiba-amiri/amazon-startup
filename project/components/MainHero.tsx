// src/components/MainHero.tsx
import Hero from "./Hero";
import { Search } from "lucide-react";

export default function MainHero() {
  return (
    <section
      dir="rtl"
      className="relative bg-primary-500 pt-44 pb-40 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Search */}
        <div className="relative max-w-4x1 mx-auto mb-10">
          <input
            type="text"
            placeholder="جستجو در بین دوره‌ها..."
            className="w-full rounded-full py-7 pr-6 pl-14 text-sm shadow-md focus:outline-none  bg-white text-gray-800"
          />
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Animated slogan */}
        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 h-12">
          <Hero />
        </div>

        {/* Description */}
        <p className="text-green-100 leading-relaxed text-lg">
          اگر در ابتدای مسیر یادگیری برنامه‌نویسی قرار دارید یا بعد از چند سال
          فعالیت حرفه‌ای به‌عنوان برنامه‌نویس به‌دنبال فتح قله‌های جدیدتر در این
          حوزه هستید، دوره‌های سبزین دقیقاً برای شما طراحی شده‌اند...
        </p>
      </div>

      {/* Curve Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,85.3C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
