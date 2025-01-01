import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-classBg">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-darkYellow">404</h1>
        <p className="mt-4 text-xl text-gray-300">Page Not Found</p>
        <p className="mt-2 text-gray-400">
          The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 text-lg text-white bg-darkytext-darkYellow rounded-lg"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
