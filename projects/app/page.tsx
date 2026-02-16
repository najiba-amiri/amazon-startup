import React from "react";
import MainHero from "./components/MainHero";
import CourseCard from "./components/CourseCard";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const coursesData = [
    {
      id: 1,
      title: "دوره جامع بک اند با جنگو + نینجا ",
      instructor: "انجنیر حیدر رضایی",
      rating: 5,
      students: 8,
      price: "۱۳۶۰",
    },
    {
      id: 2,
      title: "دوره جامع فرانت اند با هوش مصنوعی",
      instructor: "انجنیر مهدی جهانگیر",
      rating: 5,
      students: 8,
      price: "۱۳۶۰",
    },
  ];

  const projectsData = [
    {
      id: 1,
      title: "پروژه فروشگاهی آنلاین",
      developer: "تیم آمازون",
      rating: 4,
      company: "شرکت مجید مال",
      price: "۱۳۰۰۰ دلار",
    },
  ];

  return (
    <main>
      <MainHero />

      <section className="container mx-auto mt-16 py-12" dir="rtl">
        <h2 className="text-3xl font-bold mb-8">
          جدیدترین دوره‌های آپلود شده
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-16 py-12" dir="rtl">
        <h2 className="text-3xl font-bold mb-8">
          جدیدترین پروژه آپلود شده
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
