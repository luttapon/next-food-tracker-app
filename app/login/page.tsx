"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "tine@gmail.com" && password === "111") {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-white p-4">
      <div className="text-center p-8 bg-white bg-opacity-30 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold mb-8 text-black">Login</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-left text-lg font-medium mb-1 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-left text-lg font-medium mb-1 text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="text-red-600 font-bold">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400 ">
            Login
          </button>
        </form>
        <p className="mt-8 text-center text-lg text-black">
          Don`t have an account?{" "}
          <a
            href="/register"
            className="text-red-500 font-bold underline transition-colors duration-300 hover:text-green-300 ">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
