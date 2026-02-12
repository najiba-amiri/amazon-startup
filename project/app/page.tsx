// src/app/page.tsx
import MainHero from "@/components/MainHero";
import CourseCard from "@/components/CourseCard";
import ProjectCard from "@/components/ProjectCard";

// داده‌های تستی دوره‌ها
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
  {
    id: 3,
    title: "دوره جامع جاوا اسکرپت",
    instructor: "محمد علی پاینده",
    rating: 5,
    students: 8,
    price: "۱۳۶۰",
  },
  {
    id: 4,
    title: "دوره جامع موبایل با ریکت نیتیو",
    instructor: " الیاس علاالدین ",
    rating: 5,
    students: 8,
    price: "۱۳۶۰",
  },
  // می‌توانید دوره‌های بیشتری اضافه کنید
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
  {
    id: 2,
    title: "اپلیکیشن مدیریت وظایف",
    developer: "تیم آمازون",
    rating: 5,
    company: "شرکت الکوزی",
    price: "توافقی افغانی",
  },
  {
    id: 3,
    title: "اپلیکیشن مدیریت مالی",
    developer: "تیم آمازون",
    rating: 4,
    company: "شرکت نوآوران",
    price: "۱۵۰۰۰ دلار",
  },
  {
    id: 4,
    title: "اپلیکیشن ارتباطات داخلی",
    developer: "تیم آمازون",
    rating: 5,
    company: "شرکت پارس",
    price: "توافقی افغانی",
  },
  // می‌توانید پروژه‌های بیشتری اضافه کنید
];

export default function Home() {
  return (
    <main>
      <MainHero />

      {/* --- بخش جدیدترین دوره‌ها --- */}
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 py-12"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
          جدیدترین دوره‌های آپلود شده
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              students={course.students}
              price={course.price}
            />
          ))}
        </div>
      </section>

      {/* --- بخش جدیدترین پروژه‌ها --- */}
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 py-12"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
          جدیدترین پروژه آپلود شده
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              developer={project.developer}
              rating={project.rating}
              company={project.company}
              price={project.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
