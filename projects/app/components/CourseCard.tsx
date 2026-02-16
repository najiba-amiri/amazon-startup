// src/components/CourseCard.tsx
import { Star, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: string;
  originalPrice?: string;
  badge?: string;
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${
        i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
      }`}
    />
  ));
};

export default function CourseCard({
  title,
  instructor,
  rating,
  students,
  price,
  originalPrice = "1500",
  badge = "متخصص",
}: CourseCardProps) {
  return (
    <div
      dir="rtl"
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition"
    >
      {/* Header */}
      <div className="relative h-36 bg-emerald-500 flex items-center justify-center">
        <span className="absolute top-3 right-3 bg-white/20 text-white text-xs px-3 py-1 rounded-full">
          {badge}
        </span>

        <span className="text-white text-5xl font-bold opacity-80">
          {"</>"}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-bold text-gray-800 mb-2 leading-snug">{title}</h3>

        <p className="text-sm text-gray-500 mb-4">مدرس: {instructor}</p>

        <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 text-sm mb-4">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
            <span className="text-gray-600 mr-1">{rating}</span>
          </div>

          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 ml-1" />
            {students} دانشجو
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 line-through">
              {originalPrice} افغانی
            </div>
            <div className="text-lg font-bold text-emerald-600">
              {price} افغانی
            </div>
          </div>

          <span className="bg-emerald-100 text-emerald-600 text-xs px-3 py-1 rounded-full">
            50٪ تخفیف
          </span>
        </div>
      </div>
    </div>
  );
}