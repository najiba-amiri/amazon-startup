import React from "react";

/* ================= TYPES ================= */

type Project = {
  id: number;
  title: string;
  author: string;
  description: string;
};

type ProjectCardProps = {
  project: Project;
};

/* ================= CARD ================= */

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // safety guard (prevents crash)
  if (!project) return null;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Top yellow section */}
      <div className="bg-yellow-400 h-20 w-full" />

      {/* Card body */}
      <div className="p-4 text-right" dir="rtl">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 mb-3">
          {project.author}
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

/* ================= PAGE ================= */

const projects: Project[] = [
  {
    id: 1,
    title: "سیستم ساخت دیتابیس مدیریت کتابخانه",
    author: "توسط هندة الصرات مجلسي",
    description:
      "این پروژه برای مدیریت کتابخانه‌ها طراحی شده است و شامل ثبت کتاب‌ها و کاربران می‌باشد.",
  },
  {
    id: 2,
    title: "سیستم ساخت دیتابیس مدیریت کتابخانه",
    author: "توسط هندة الصرات مجلسي",
    description:
      "سیستمی مدرن برای سازماندهی داده‌ها و افزایش بهره‌وری کتابخانه.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
