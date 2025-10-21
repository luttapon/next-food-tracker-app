"use client";

import React, { useState } from "react";

// Define the type for the form data
// กำหนดประเภทข้อมูลสำหรับข้อมูลในฟอร์ม
interface ProfileForm {
  name: string;
  email: string;
  imagePreview: string | null;
}

const Profile = () => {
  // State to manage the form data
  // State สำหรับจัดการข้อมูลในฟอร์ม
  const [formData, setFormData] = useState<ProfileForm>({
    name: "John Doe", // Mock data
    email: "john.doe@example.com", // Mock data
    imagePreview: "https://placehold.co/150x150/f97316/fff?text=JP", // Mock image
  });

  // Handle changes in form inputs
  // จัดการการเปลี่ยนแปลงในช่องกรอกข้อมูล
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    console.log("Profile data submitted:", formData);
    // Here you would typically send the data to a backend or a database
    // ตรงนี้จะเป็นส่วนที่คุณจะส่งข้อมูลไปยัง backend หรือฐานข้อมูล
    // For now, we will just log the data
  };

  return (
    // Main container with a vibrant background
    <div className="min-h-screen flex flex-col items-center p-4 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-white">
      {/* Profile Card */}
      <div className="bg-orange bg-opacity-30 rounded-3xl shadow-2xl p-8 w-full max-w-lg mx-auto my-8">
        {/* Header with Edit Profile text and Back button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold">Edit Profile</h1>
          <a
            href="/dashboard"
            className="text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400">
            Back
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Image with Preview */}
          <div className="flex flex-col items-center">
            {formData.imagePreview && (
              <img
                src={formData.imagePreview}
                alt="Profile Preview"
                className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white mb-4"
              />
            )}
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="profileImage"
              className="w-full p-3 rounded-full bg-white bg-opacity-20 text-center cursor-pointer block transition-colors duration-300 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white">
              แก้ไขรูปโปรไฟล์
            </label>
          </div>

          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">
              ชื่อ
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="กรอกชื่อของคุณ"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="กรอกอีเมลของคุณ"
              required
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400">
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
