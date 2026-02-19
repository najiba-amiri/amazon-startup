export default function Page() {
  return (
    <div className=" bg-gray-300 py-10 px-4 overflow-y-auto">
      
      <form className="bg-white max-w-md mx-auto p-6 rounded-2xl shadow-lg">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          فورم ثبت نام کارآموزان
        </h1>

        <input className="w-full h-10 mb-4 p-3 border rounded-lg" placeholder="نام" />
        <input className="w-full h-10 mb-4 p-3 border rounded-lg" placeholder="تخلص" />
        <input className="w-full h-10 mb-4 p-3 border rounded-lg" placeholder="نام پدر" />
        <input className="w-full h-10 mb-4 p-3 border rounded-lg" placeholder="ایمیل" />
        <input className="w-full h-10 mb-4 p-3 border rounded-lg" placeholder="شماره تماس" />

        <select className="w-full p-3 mb-4 border rounded-lg">
          <option>جنسیت</option>
          <option>مرد</option>
          <option>زن</option>
        </select>

        <input className="w-full h-10 mb-4 p-3 border rounded-lg" placeholder="محل سکونت" />

        <label className="font-bold block mb-2">
          مهارت‌های کامپیوتری
        </label>

        <textarea
          className="w-full h-24 mb-4 p-3 border rounded-lg"
          placeholder="مهارت‌های خود را بنویسید"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800">
          ثبت نام
        </button>

      </form>

    </div>
  );
}
