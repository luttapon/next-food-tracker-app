"use client";

import React, { useState } from "react";

// Define the type for the form data
// กำหนดประเภทข้อมูลสำหรับข้อมูลในฟอร์ม
interface FoodForm {
  name: string;
  meal: "มื้อเช้า" | "มื้อกลางวัน" | "มื้อเย็น";
  date: string;
  imagePreview: string | null;
}

const AddFood = () => {
  // State to manage the form data
  // State สำหรับจัดการข้อมูลในฟอร์ม
  const [formData, setFormData] = useState<FoodForm>({
    name: "",
    meal: "มื้อเช้า", // Default value
    date: "",
    imagePreview: null,
  });

  // Handle changes in form inputs
  // จัดการการเปลี่ยนแปลงในช่องกรอกข้อมูล
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image file selection and create a preview
  // จัดการการเลือกไฟล์รูปภาพและสร้างตัวอย่าง
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imagePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        imagePreview: null,
      }));
    }
  };

  // Handle form submission
  // จัดการการส่งฟอร์ม
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Food data submitted:", formData);
    // Here you would typically send the data to a backend or a database
    // ตรงนี้จะเป็นส่วนที่คุณจะส่งข้อมูลไปยัง backend หรือฐานข้อมูล
    // For now, we will just clear the form
    setFormData({
      name: "",
      meal: "มื้อเช้า",
      date: "",
      imagePreview: null,
    });
  };

  return (
    // Main container with a vibrant background
    <div className="min-h-screen flex flex-col items-center p-4 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-white">
      {/* Form container */}
      <div className="bg-white bg-opacity-30 rounded-3xl shadow-2xl p-8 w-full max-w-lg mx-auto my-8">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-black" >Add Food</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Food Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1 text-black">
              ชื่ออาหาร
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="เช่น ข้าวผัดกะเพรา"
              required
            />
          </div>

          {/* Meal Type Select */}
          <div>
            <label htmlFor="meal" className="block text-lg font-medium mb-1 text-black">
              มื้ออาหาร
            </label>
            <select
              id="meal"
              name="meal"
              value={formData.meal}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              required>
              <option value="มื้อเช้า">มื้อเช้า</option>
              <option value="มื้อกลางวัน">มื้อกลางวัน</option>
              <option value="มื้อเย็น">มื้อเย็น</option>
            </select>
          </div>

          {/* Date Input */}
          <div>
            <label htmlFor="date" className="block text-lg font-medium mb-1 text-black">
              วันเดือนปี
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Image Input with Preview */}
          <div>
            <label htmlFor="image" className="block text-lg font-medium mb-1 text-black">
              รูปภาพอาหาร
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="image"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-center cursor-pointer block transition-colors duration-300 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white">
              เลือกรูปภาพ
            </label>
            {formData.imagePreview && (
              <div className="mt-4 flex justify-center">
              
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400">
              บันทึก
            </button>
            <a
              href="/dashboard"
              className="flex-1 text-center bg-gray-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400">
              ย้อนกลับ
            </a>
              <a
              href="/profile"
              className="flex-1 text-center bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400">
              ไปหน้า Profile
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
