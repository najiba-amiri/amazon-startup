// app/about-us/page.jsx
"use client";
import Image from "next/image";

const team = [
  { name: "Idres Allawdin", role: "Full Stack Developer" },
  { name: "Najiba Amiri", role: "UI/UX Designer" },
  { name: "Haider Rezai", role: "Python / Django Mentor" },
  { name: "Haider Rezai", role: "Python / Django Mentor" },


];

export default function AboutUs() {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero */}
      <section className=" rounded-full bg-green-500 text-white pt-28 text-center px-9 shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          درباره ما
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          ما یک پلتفرم کارآموزی هستیم که با تمرکز روی پروژه‌های عملی و منتورینگ حرفه‌ای
          جوانان را برای بازار کار آماده می‌کنیم.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className=" pt-10 mx-auto grid md:grid-cols-2 gap-6 px-5 py-30">
        <div className="bg-white p-8 px-40 py-30 rounded-lg shadow border-t-4 border-green-600 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-2">🎯 ماموریت</h2>
          <p>
          ایجاد مسیر روشن برای یادگیری مهارت‌های کاربردی و استخدام‌پذیر.
          ایجاد مسیر روشن برای یادگیری مهارت‌های کاربردی و استخدام‌پذیر.
            ایجاد مسیر روشن برای یادگیری مهارت‌های کاربردی و استخدام‌پذیر.
          </p>
        </div>

        <div className="bg-white p-8 px-40 py-30 rounded-lg shadow border-t-4 border-green-600 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-2">👁 چشم‌انداز</h2>
          <p>
          ایجاد مسیر روشن برای یادگیری مهارت‌های کاربردی و استخدام‌پذیر.
          ایجاد مسیر روشن برای یادگیری مهارت‌های کاربردی و استخدام‌پذیر.
          ایجاد مسیر روشن برای یادگیری مهارت‌های کاربردی و استخدام‌پذیر.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16 px-4 max-w-6x1 mx-auto">
            <h1>درمورد سال تاسیس </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci eos quos quod aliquam neque, ea incidunt tenetur quidem, beatae commodi vero soluta eaque repellendus? Consectetur atque rem illo quos.</p>
        </div>
        <div className="container py-16 px-4 max-w-6x1 mx-auto">
            <h1>درمورد سال تاسیس </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci eos quos quod aliquam neque, ea incidunt tenetur quidem, beatae commodi vero soluta eaque repellendus? Consectetur atque rem illo quos.</p>
        </div> 
        <div className="container py-16 px-4 max-w-6x1 mx-auto">
            <h1>درمورد سال تاسیس </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci eos quos quod aliquam neque, ea incidunt tenetur quidem, beatae commodi vero soluta eaque repellendus? Consectetur atque rem illo quos.</p>
        </div>
      </section>

      {/* Why Us */}
          {/* Why Us - Circular Design */}
      <section className=" bg-gray-200 pt-10 mx-auto">
        <div className=" pt-10 items-center text-center font-bold text-3xl ">why us</div>
       <div className="py-40 px-4 grid md:grid-cols-2 items-center gap-10">

       <div className="relative mx-auto h-[50px] w-full flex items-center justify-center pt-50">
       
          {/* دایره پس‌زمینه بزرگ */}
          <div className="bg-white p-24 absolute bottom-[-160px] w-[400px] h-[400px]
           md:w-[500px] md:h-[450px] rounded-full border-[15px]
            border-green-100/50  ">
             <div className="text-center md:mb-48 pt-30">
                <p className="text-green-600 font-bold text-center md:text-2xl ">نقشه راه یادگیری</p>
                <p className=" text-sm">مسیر حرفه‌ای شما</p>
             </div>
          </div>

          {/* چیدمان آیتم‌ها روی منحنی */}
          {[
            { t: "آموزش عملی و پروژه‌محور", icon: "💻" },
            { t: "منتورهای باتجربه", icon: "👨‍🏫" },
            { t: "یادگیری مطابق بازار", icon: "📈" },
            { t: "پشتیبانی مستمر", icon: "🎧" },
            { t: "آماده‌سازی برای استخدام", icon: "🚀" },
          ].map((item, i) => {
            // زاویه‌بندی: از ۱۸۰ درجه تا ۰ درجه تقسیم بر ۵ بخش
            const angle = 180 - (i * (180 / 4));
            const radius = 220; // شعاع منحنی (در دسکتاپ)
            
            return (
              <div
                key={i}
                className="absolute flex flex-col items-center group transition-all duration-300"
                style={{
                  left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
                  bottom: `${radius * Math.sin((angle * Math.PI) / 180) - 50}px`,
                  transform: 'translateX(-50%)'
                }}
              >
                {/* متن بالای دایره */}
                <div className="whitespace-nowrap bg-white shadow-md px-4 py-1.5 rounded-full border border-green-200 text-xs md:text-sm font-bold text-gray-700 group-hover:scale-110 transition-transform">
                  {item.t}
                </div>

                {/* دایره آیکون */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center text-2xl md:text-3xl shadow-xl border-4 border-white group-hover:rotate-12 transition-all">
                  {item.icon}
                </div>

                {/* خط اتصال آبی (شبیه عکس) */}
                <div className="w-1 h-10 bg-blue-100 mt-2 rounded-full"></div>
              </div>
            );
          })}
        </div>
        <div className="bg-gray-100 rounded-lg w-200 h-120 p-8 shadow-md ">
            <h2 className="text-3xl font-bold text-center">مارا انتخاب کنید چون </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci eos quos quod aliquam neque, ea incidunt tenetur quidem, beatae commodi vero soluta eaque repellendus? Consectetur atque rem illo quos.</p>
        </div>
        </div>
      </section>

            <section>
            <div className="container py-16 px-4 max-w-6x1 mx-auto">
                <h1 className="text-center text-3xl font-bold mb-8">our Team</h1>
                <div className="display  grid md:grid-cols-4 gap-6 justify-center">
                 {team.map((member,i)=>(
                <div key={i} className="bg-white p-6 rounded-lg shadow-md border-green-600 text-center ">
                    <Image src="/amazon.jpg" alt="Logo" width={100} height={50} className="mx-auto"/>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
                 ))
                 }   
                </div>
            </div>
        </section>


    </div>
  );
}
