// app/about-us/page.jsx
"use client";
import React from "react";
import Image from "next/image"
const team = [
  { name: "Edris Alowdin", role: "Full Stack Developer" },
  { name: "Najiba Amiri", role: "UI/UX Designer" },
  { name: "Haider Rezai", role: "Python / Django Mentor" },
];

export default function AboutUs() {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero */}
      <section className="bg-yellow-400 text-white py-20 text-center px-4 rounded-lg shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          درباره ما
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          ما یک پلتفرم کارآموزی هستیم که با تمرکز روی پروژه‌های عملی و منتورینگ حرفه‌ای
          جوانان را برای بازار کار آماده می‌کنیم.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-lg shadow border-t-4 border-green-600 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-2">🎯 ماموریت</h2>
          <p>
            ایجاد مسیر روشن برای یادگیری مهارت‌های کاربردی و استخدام‌پذیر.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow border-t-4 border-green-600 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-2">👁 چشم‌انداز</h2>
          <p>
            تبدیل‌شدن به معتبرترین پلتفرم کارآموزی آنلاین.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">چرا ما؟</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "آموزش عملی و پروژه‌محور",
            "منتورهای باتجربه",
            "یادگیری مطابق بازار",
            "پشتیبانی مستمر",
            "آماده‌سازی برای استخدام",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow border-t-4 border-green-600 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      {/* Team */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">تیم ما</h2>
          <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow border-t-4 border-green-600 text-center ">
            <Image src="/amazon.jpg" alt="Logo" width={100} height={50} className="mx-auto"/>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
         
          ))}
           </div>
      </section>
    </div>
  );
}
