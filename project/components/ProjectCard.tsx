// src/components/ProjectCard.tsx
import { Star, Briefcase } from "lucide-react";

interface ProjectCardProps {
  title: string;
  developer: string;
  rating: number; // مثلاً 4 یا 5
  company: string;
  price: string;
}

// تابعی برای تولید آیکون ستاره بر اساس عدد ریتینگ
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    // اگر i کمتر از ریتینگ بود، ستاره زرد (پر شده) نشان بده، در غیر این صورت خاکستری (خالی)
    if (i < rating) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />,
      );
    } else {
      stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
    }
  }
  return stars;
};

export default function ProjectCard({
  title,
  developer,
  rating,
  company,
  price,
}: ProjectCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl border border-gray-100"
      dir="rtl"
    >
      {/* بخش تصویر (تصویر پروژه) */}
      <div className="h-40 bg-blue-50 flex items-center justify-center text-blue-600">
        تصویر پروژه
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>

        {/* توسعه دهنده (چیدمان منظم‌تر) */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Briefcase className="w-4 h-4 ml-2" />
          <span>توسعه دهنده: {developer}</span>
        </div>

        <div className="flex items-center justify-between text-sm mb-4">
          {/* میزان رضایت مشتری (فقط آیکون‌ها) */}
          <div className="flex items-center space-x-1 space-x-reverse">
            {renderStars(rating)}
          </div>

          {/* شرکت استفاده‌کننده */}
          <div className="flex items-center text-gray-500">
            <span>استفاده کننده: {company}</span>
          </div>
        </div>

        {/* قیمت پروژه (بدون ستاره‌های markdown) */}
        <div className="text-xl font-bold text-primary-500 mt-4">{price}</div>
      </div>
    </div>
  );
}
