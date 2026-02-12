import React from "react";
import Link from "next/link";

/* ================= TYPES ================= */

type Project = {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  status: "done" | "working";
};

type ProjectCardProps = {
  project: Project;
};

/* ================= RESTORED CARD COMPONENT ================= */

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) return null;

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-[#21a07f]/10 transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col h-full">
      {/* Restored Image Size to h-44 */}
      <div className="relative h-44 w-full overflow-hidden bg-gray-100">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
          project.status === "done" ? "bg-[#21a07f] text-white" : "bg-yellow-400 text-gray-900"
        }`}>
          {project.status === "done" ? "تکمیل شده" : "در حال اجرا"}
        </div>
      </div>

      {/* Card body - Restored Paddings and Font Sizes */}
      <div className="p-5 text-right flex flex-col flex-grow" dir="rtl">
        <div className="flex items-center gap-2 mb-2">
          <div className={`h-1 w-5 rounded-full ${project.status === 'done' ? 'bg-[#21a07f]' : 'bg-yellow-400'}`} />
          <span className="text-[#21a07f] text-[11px] font-bold">اطلاعات پروژه</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#21a07f] transition-colors">
          {project.title}
        </h3>

        <div className="inline-block bg-gray-50 text-gray-500 text-[11px] font-medium px-3 py-1 rounded-lg mb-4 w-fit border border-gray-100">
          {project.author}
        </div>

        <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Action Button - Restored Large Size */}
        <Link 
          href={`/projects/${project.id}`} 
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-900 text-white text-sm font-bold rounded-xl transition-all duration-200 hover:bg-[#21a07f] shadow-md shadow-gray-100"
        >
          <span>مشاهده جزئیات</span>
          <span className="text-yellow-400 text-lg">←</span>
        </Link>
      </div>
    </div>
  );
};

/* ================= PAGE COMPONENT ================= */

const projects: Project[] = [
  { id: 1, title: "سیستم مدیریت کتابخانه", author: "hieder rezaei", description: "سیستم پیشرفته برای مدیریت دیتابیس کتاب‌های فیزیکی و دیجیتال به همراه پنل کاربری.", imageUrl: "/gg.png", status: "done" },
  { id: 2, title: "داشبورد آماری کتابخانه", author: "hieder rezaei", description: "ارائه گزارش‌های دقیق از میزان امانت کتاب‌ها و تحلیل داده‌های کاربران کتابخانه.", imageUrl: "/gg.png", status: "done" },
  { id: 3, title: "اتوماسیون اداری نوین", author: "hieder rezaei", description: "سیستم یکپارچه مدیریت نامه‌های اداری و فرآیندهای سازمانی.", imageUrl: "/gg.png", status: "done" },
  { id: 4, title: "دیتابیس مرکزی کاربران", author: "hieder rezaei", description: "ذخیره‌سازی ابری و مدیریت متمرکز اطلاعات هویتی کاربران.", imageUrl: "/gg.png", status: "done" },
  { id: 5, title: "اپلیکیشن موبایل هوشمند", author: "hieder rezaei", description: "طراحی رابط کاربری و تجربه کاربری برای نسخه موبایل سیستم.", imageUrl: "/gg.png", status: "working" },
  { id: 6, title: "هوش مصنوعی پیشنهاد دهنده", author: "hieder rezaei", description: "پیاده‌سازی الگوریتم‌های یادگیری ماشین برای پیشنهاد کتاب.", imageUrl: "/gg.png", status: "working" },
  { id: 7, title: "زیرساخت بلاکچین", author: "hieder rezaei", description: "ثبت غیرمتمرکز تراکنش‌های امانت و بازگشت منابع.", imageUrl: "/gg.png", status: "working" },
  { id: 8, title: "تشخیص چهره هوشمند", author: "hieder rezaei", description: "سیستم ورود و خروج مبتنی بر تکنولوژی تشخیص چهره.", imageUrl: "/gg.png", status: "working" },
];

export default function ProjectsPage() {
  const doneProjects = projects.filter(p => p.status === "done");
  const workingProjects = projects.filter(p => p.status === "working");

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-20" dir="rtl">
      {/* Added pt-28 to ensure text is below header while scrolling */}
      <div className="max-w-7xl mx-auto px-6 pt-28">
        
        {/* COMPLETED PROJECTS SECTION */}
        <section className="mb-20">
          <header className="mb-8 text-right border-r-4 border-[#21a07f] pr-4">
            <h2 className="text-2xl font-black text-gray-900">پروژه‌های <span className="text-[#21a07f]">تکمیل شده</span></h2>
            <p className="text-gray-500 text-sm mt-1">لیست دیتابیس‌هایی که با موفقیت پیاده‌سازی شده‌اند</p>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doneProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* WORKING PROJECTS SECTION */}
        <section>
          <header className="mb-8 text-right border-r-4 border-yellow-400 pr-4">
            <h2 className="text-2xl font-black text-gray-900">پروژه‌های <span className="text-yellow-500">در حال اجرا</span></h2>
            <p className="text-gray-500 text-sm mt-1">ایده‌ها و پروژه‌هایی که در حال توسعه هستند</p>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {workingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
