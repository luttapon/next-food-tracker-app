"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import Image from "next/image";

import Link from "next/link";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
  FaVenusMars,
} from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",

    email: "",

    password: "",

    gender: "",

    profilePic: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({ ...prev, profilePic: file }));

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Form data:", formData);

    // Logic for form submission (e.g., API call) goes here
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="w-full max-w-md rounded-lg bg-white bg-opacity-90 p-8 shadow-2xl backdrop-blur-sm">
        <button
          id="backBtn"
          onClick={handleBack}
          className="absolute top-4 left-4 p-2 rounded-full text-gray-500 hover:bg-gray-200 transition-colors duration-200"
          aria-label="Back to homepage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Create an account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ชื่อ-สกุล */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaUser />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* อีเมล */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaEnvelope />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* รหัสผ่าน */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaLock />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* เลือกเพศ */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaVenusMars />
            </div>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* เลือกรูปพร้อมพรีวิว */}
          <div className="flex items-center space-x-4">
            <label
              htmlFor="profilePic"
              className="cursor-pointer text-gray-600 hover:text-gray-800">
              <div className="flex items-center space-x-2">
                <FaImage />
                <span>Choose Profile Picture</span>
              </div>
            </label>
            <input
              id="profilePic"
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {imagePreview && (
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-pink-500 shadow-md">
                <Image
                  src={imagePreview}
                  alt="Profile Preview"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>

          {/* ปุ่มลงทะเบียน */}
          <button
            type="submit"
            className="w-full rounded-full bg-pink-500 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
            Register
          </button>
        </form>

        {/* ลิงก์ไปยังหน้า Login */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" passHref>
            <span className="font-semibold text-pink-600 transition-colors hover:text-pink-800 hover:underline">
              Login here
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
}
