import React from "react";
// Fixed: Using Next.js Link instead of react-router-dom
import Link from "next/link";

/* ================= TYPES ================= */

type Project = {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

/* ================= CARD ================= */

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) return null;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Project Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1.5 " />
      </div>

      {/* Card body */}
      <div className="p-6 text-right flex flex-col flex-grow" dir="rtl">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
          {project.title}
        </h3>

        <div className="inline-block bg-yellow-50 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
          توسط: {project.author}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Fixed: Link uses 'href' in Next.js */}
        <Link 
          href={`/projects/${project.id}`} 
          className="w-full inline-block text-center py-3 px-4 bg-gray-900 hover:bg-yellow-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-yellow-200/50"
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
};

/* ================= PAGE ================= */

const projects: Project[] = [
  {
    id: 1,
    title: "سیستم مدیریت کتابخانه",
    author: "hieder rezaei",
    description: "سیستم پیشرفته برای مدیریت دیتابیس کتاب‌های فیزیکی و دیجیتال به همراه پنل کاربری.",
    imageUrl: "./gg.png",
  },
  {
    id: 2,
    title: "داشبورد آماری کتابخانه",
    author: " hieder rezaei ",
    description: "ارائه گزارش‌های دقیق از میزان امانت کتاب‌ها و تحلیل داده‌های کاربران کتابخانه.",
    imageUrl: "./gg.png",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-right">
          <h1 className="text-4xl font-black text-gray-900 mb-4 border-r-8 border-yellow-400 pr-4">
            لیست پروژه‌ها
          </h1>
          <p className="text-gray-500 mr-2 font-medium">مدیریت و مشاهده جزئیات دیتابیس‌های طراحی شده</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
