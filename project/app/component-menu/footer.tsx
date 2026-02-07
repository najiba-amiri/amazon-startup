import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sandbox
          </h2>
          <p className="text-sm leading-6">
            پلتفرمی برای یادگیری، ساخت پروژه و اموزش فنی.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">لینک‌های سریع</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href="/course" className="hover:text-blue-400 transition">
                دوره‌ها
              </Link>
            </li>
            <li>
              <Link href="/project" className="hover:text-blue-400 transition">
                پروژه‌ها
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-blue-400 transition">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">پشتیبانی</h3>
          <ul className="space-y-2">
            <li>سؤالات متداول</li>
            <li>قوانین و مقررات</li>
            <li>حریم خصوصی</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">ارتباط با ما</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@sandbox.com</li>
            <li>Phone: +93 xxx xxx xxx</li>
            <li className="flex space-x-4 pt-2">
              <span className="hover:text-blue-400 cursor-pointer"></span>
              <span className="hover:text-blue-400 cursor-pointer"></span>
              <span className="hover:text-blue-400 cursor-pointer"></span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Sandbox. All rights reserved.
      </div>
    </footer>
  );
}
