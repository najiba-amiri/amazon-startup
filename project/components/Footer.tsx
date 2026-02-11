import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from 'next/link'; // استفاده از Link برای ناوبری بهتر در Next.js

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white mt-12 shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10" dir="rtl">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Slogan Section */}
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-4">
              آمازون‌تِک | AmazonTech
            </div>
            <p className="text-gray-200 text-sm">
              شروع هر چیزی سخته ولی وقتی مسیر درستی رو انتخاب کنی با خیال راحت و
              بدون استرس می‌تونی از مسیر لذت ببری. ما در کنارت هستیم تا با هم
              رشد کنیم و متخصص شویم.
            </p>
          </div>

          {/* Suggested Courses Section (با لینک واقعی) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-yellow-400 pb-2">
              دوره‌های پیشنهادی
            </h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li><Link href="/courses/html" className="hover:text-yellow-400 transition">آموزش جامع HTML</Link></li>
              <li><Link href="/courses/css" className="hover:text-yellow-400 transition">آموزش جامع CSS</Link></li>
              <li><Link href="/courses/javascript" className="hover:text-yellow-400 transition">آموزش جاوا اسکریپت</Link></li>
              <li><Link href="/courses/typescript" className="hover:text-yellow-400 transition">آموزش تایپ اسکرپت</Link></li>
              <li><Link href="/courses/tailwind" className="hover:text-yellow-400 transition">آموزش جامع Tailwind CSS</Link></li>
              <li><Link href="/courses/react" className="hover:text-yellow-400 transition">آموزش جامع React Js</Link></li>
              <li><Link href="/courses/nextjs" className="hover:text-yellow-400 transition">آموزش جامع Next.Js</Link></li>
              <li><Link href="/courses/django" className="hover:text-yellow-400 transition">آموزش جامع جنگو</Link></li>
            </ul>
          </div>

          {/* Contact Information Section (متن لازم اضافه شد) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-yellow-400 pb-2">
              تماس با ما
            </h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-center">
                <Mail className="h-4 w-4 ml-3 text-yellow-400" />
                <a href="mailto:info@amazontech.com" className="hover:text-yellow-400 transition">info@amazontech.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 ml-3 text-yellow-400" />
                <span>+93 (0) 7xx xxx xxx (افغانستان)</span>
              </li>
              <li className="text-gray-200">
                    افغانستان، دشت‌برچی، جاده شهیدمزاری، ایستگاه نقاش، مارکت تجارتی بینظیر، منزل 4، اتاق 8
              </li>
            </ul>
          </div>

           {/* Social Media Icons Section */}
           <div className="flex flex-col items-start">
             <h4 className="text-lg font-semibold mb-4 border-b border-yellow-400 pb-2">
               شبکه‌های اجتماعی
             </h4>
             <div className="flex space-x-4 space-x-reverse">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-6 w-6 text-white hover:text-yellow-500 cursor-pointer transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-6 w-6 text-white hover:text-yellow-500 cursor-pointer transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6 text-white hover:text-yellow-500 cursor-pointer transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                    <Linkedin className="h-6 w-6 text-white hover:text-yellow-500 cursor-pointer transition" />
                </a>
             </div>
           </div>


        </div>
        
        {/* Copyright Section (متن لازم اضافه شد) */}
        <div className="mt-10 pt-6 border-t border-primary-400">
          <p className="text-center text-sm text-gray-200" dir="ltr">
            &copy; {new Date().getFullYear()} کلیه حقوق مادی و معنوی سایت برای آمازون تِک محفوظ است. 1404
          </p>
        </div>

      </div>
    </footer>
  );
}

