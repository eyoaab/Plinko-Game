import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function BankAmount() {
  const { loading, error, userInfo } = useSelector((state) => state.auth);
  const score = useSelector((state) => state.game.score);
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center  h-full bg-gray-100 rounded-sm">
      {loading && (
        <p className="text-blue-500 text-lg font-semibold animate-pulse">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-red-500 text-md font-medium">Error: {error}</p>
      )}
      {userInfo && (
        <div className="bg-white shadow-lg rounded-lg p-2">
          <p className="text-gray-700 text-md font-semibold text-left ">
            {userInfo.user.name}
          </p>

          <div className="rounded-lg text-center  flex items-center justify-between">
            {/* Balance label */}
            <span className="text-gray-700 text-md font-semibold inline">
              Balance:
            </span>

            {/* Balance value */}
            {score !== 0 && (
              <p className="text-green-600 text-xl font-bold pl-3">
                ${score.toFixed(2)}
              </p>
            )}
            {score === 0 && (
              <p className="text-green-600 text-xl font-bold pl-3">
                ${userInfo.user.score.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      )}
      {!userInfo && (
        <p className="p-1 text-sm text-center text-black">
          You have To Log In First{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Log-in
          </Link>
        </p>
      )}
    </div>
  );
}

export default BankAmount;
