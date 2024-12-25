import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-classBg">
      <div className="w-full max-w-sm p-6 bg-darkGray rounded-lg shadow-md">
        <h2 className="text-2xl font-saira text-center text-white">Login</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-max px-10 py-2 mt-4 text-black bg-darkYellow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        {error && (
          <p className="mt-4 text-sm text-center text-red-700">{error}</p>
        )}
        <p className="mt-4 text-sm text-center text-white">
          Don't have an account?{" "}
          {/* <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
