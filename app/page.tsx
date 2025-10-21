import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    // Container หลักพร้อมพื้นหลังสีสันสดใส
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-white p-4">
      {/* ส่วนเนื้อหาหลักที่จัดกึ่งกลาง */}
      <div className="text-center p-8 bg-black bg-opacity-30 rounded-3xl shadow-2xl">
        {/* โลโก้แอปพลิเคชัน (สามารถเปลี่ยน URL เป็นโลโก้จริงได้) */}
        <div className="mb-8">
          <Image
            src="/images/foodTracker.jpg" // เปลี่ยนเป็น URL ของโลโก้จริง
            alt="Food Tracker Logo"
            width={180}
            height={180}
            className="mx-auto mb-4"
          />
        </div>

        {/* ข้อความหลัก "Welcome to Food Tracker" */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Welcome to Food Tracker
        </h1>

        {/* ข้อความหลัก "Track your meal !!!" */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-8">
          Track your meal !!!
        </p>

        {/* ปุ่มสำหรับ Register และ Login */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/register"
            className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white">
            Register
          </a>
          <a
            href="/login"
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
