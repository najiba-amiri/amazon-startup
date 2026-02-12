import React from "react";
import Link from "next/link";

// This data should ideally be in a separate data.ts file so both pages can see it
const projects = [
  {
    id: 1,
    title: "سیستم مدیریت کتابخانه",
    author: "hieder rezaei",
    description: "سیستم پیشرفته برای مدیریت دیتابیس کتاب‌های فیزیکی و دیجیتال به همراه پنل کاربری.",
    fullInfo: "این پروژه شامل بخش‌های دیتابیس SQL، رابط کاربری React و مدیریت هویت کاربران است. هدف آن ساده‌سازی فرآیند امانت کتاب است.",
    imageUrl: "/gg.png",
  },
  {
    id: 2,
    title: "داشبورد آماری کتابخانه",
    author: "hieder rezaei",
    description: "ارائه گزارش‌های دقیق از میزان امانت کتاب‌ها و تحلیل داده‌های کاربران کتابخانه.",
    fullInfo: "این داشبورد از نمودارهای پیشرفته برای نمایش تحلیل‌های روزانه و ماهانه استفاده می‌کند.",
    imageUrl: "/gg.png",
  },
];

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  // Find the project based on the ID in the URL
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return <div className="text-center py-20">پروژه پیدا نشد!</div>;
  }

  return (
    <main className="min-h-screen bg-white py-12 px-6" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <Link href="/projects" className="text-gray-500 hover:text-black mb-6 inline-block font-bold">
          ← بازگشت به لیست
        </Link>

        <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover rounded-3xl mb-8 shadow-lg" />
        
        <h1 className="text-4xl font-black text-gray-900 mb-2">{project.title}</h1>
        <p className="text-yellow-600 font-bold mb-8">طراح: {project.author}</p>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
          <h2 className="text-xl font-bold mb-4 border-r-4 border-yellow-400 pr-3">توضیحات تکمیلی</h2>
          <p className="text-gray-700 leading-loose text-lg">
            {project.fullInfo}
          </p>
        </div>
      </div>
    </main>
  );
}
