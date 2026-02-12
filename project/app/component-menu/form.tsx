import React from "react";



function page() {
  return (
    <div className="h-100 bg-gray-300 py-10 px-4 overflow-y-auto">
      <form className="bg-white max-w-md mx-auto p-6 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          فورم ثبت نام کارآموزان
        </h1>

        <input placeholder="نام" className="w-full h-10 mb-4 p-3 border rounded-lg" />
        <input placeholder="تخلص" className="w-full h-10 mb-4 p-3 border rounded-lg" />
        <input placeholder="نام پدر" className="w-full h-10 mb-4 p-3 border rounded-lg" />
        <input type="email" placeholder="ایمیل" className="w-full h-10 mb-4 p-3 border rounded-lg" />
        <input placeholder="شماره تماس" className="w-full h-10 mb-4 p-3 border rounded-lg" />

        <select className="w-full p-3 mb-4 border rounded-lg">
          <option>جنسیت</option>
          <option>مرد</option>
          <option>زن</option>
        </select>

        <input placeholder="محل سکونت" className="w-full h-10 mb-4 p-3 border rounded-lg" />

        <h2 className="font-bold mb-2">مهارت‌های کمپیوتری خود را بنویسید</h2>

        <textarea
          placeholder="مهارت‌های خود را بنویسید"
          className="w-full h-24 mb-6 p-3 border rounded-lg"
        ></textarea>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800">
          Register
        </button>

      </form>
    </div>
  );
}

export default page;
