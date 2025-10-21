"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Mock data for the food items. We will display 5 items per page.
// ข้อมูลจำลองสำหรับรายการอาหาร เราจะแสดงรายการละ 5 รายการต่อหน้า
const mockFoodData = [
  { id: 1, date: "2024-06-01", name: "ข้าวผัด", meal: "กลางวัน" },
];

const itemsPerPage = 10;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockFoodData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(mockFoodData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    // Container หลักพร้อมพื้นหลังสีสันสดใส
    <div className="min-h-screen flex flex-col items-center p-4 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-white">
      {/* Dashboard Card */}
      <div className="bg-orange bg-opacity-30 rounded-3xl shadow-2xl p-8 w-full max-w-5xl mx-auto my-8">
        {/* Header and Add Food Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold">Food Dashboard</h1>
          <button
            onClick={() => router.push("/addfood")}
            className="bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400">
            Add Food
          </button>
        </div>

        {/* Food data table */}
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full bg-white text-gray-800 rounded-xl">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-left font-bold">วันที่</th>
                <th className="py-3 px-4 text-left font-bold">รูปอาหาร</th>
                <th className="py-3 px-4 text-left font-bold">ชื่ออาหาร</th>
                <th className="py-3 px-4 text-left font-bold">มื้ออาหาร</th>
                <th className="py-3 px-4 text-left font-bold">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((food) => (
                <tr
                  key={food.id}
                  className="border-t border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                  <td className="py-3 px-4">{food.date}</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">{food.name}</td>
                  <td className="py-3 px-4">{food.meal}</td>
                  <td className="py-3 px-4 space-x-2">
                    <button
                      onClick={() => console.log(`Edit item ${food.id}`)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      แก้ไข
                    </button>
                    <button className="bg-red-500 text-white py-1 px-3 rounded-full text-xs transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                      ลบ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`py-2 px-4 rounded-full font-bold transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-500 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}>
            ก่อนหน้า
          </button>
          <span className="text-xl">
            หน้า {currentPage} จาก{" "}
            {Math.ceil(mockFoodData.length / itemsPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(mockFoodData.length / itemsPerPage)
            }
            className={`py-2 px-4 rounded-full font-bold transition-all duration-300 ${
              currentPage === Math.ceil(mockFoodData.length / itemsPerPage)
                ? "bg-gray-500 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}>
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;