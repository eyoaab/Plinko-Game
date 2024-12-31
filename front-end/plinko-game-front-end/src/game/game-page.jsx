import React, { useEffect, useRef, useState } from "react";
import AmountComponent from "..//user/bank-amount-component";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateScore } from "../state-managment/game-slice";

import { BallManager } from "../game/classes/BallManager";

// Constants
const GAME_API_URL = "https://plinko-game-2.onrender.com/game";

export function Game() {
  // State and references
  const [ballManager, setBallManager] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState("");
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const score = useSelector((state) => state.game.score);

  // Initialize BallManager instance when canvas is ready
  useEffect(() => {
    if (canvasRef.current) {
      const ballManagerInstance = new BallManager(canvasRef.current);
      setBallManager(ballManagerInstance);
    }
  }, []);

  // Handler to add a ball by fetching data from the API
  const handleAddBall = async () => {
    try {
      dispatch(updateScore(score - bidAmount)); // Update game score
      const token = localStorage.getItem("token");
      const response = await axios.post(
        GAME_API_URL,
        {
          bidAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (ballManager) {
        ballManager.addBall(response.data.point);
        setTimeout(() => {
          dispatch(updateScore(response.data.score)); // Update game score
        }, 7000);
      }
    } catch (error) {
      console.error("Error adding ball:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0.0 && !isNaN(value))) {
      setBidAmount(value);
      setError("");
    } else {
      setError("Please enter a valid positive number.");
    }
  };

  return (
    <div className="flex flex-row justify-center  items-center lg:flex-row  w-full space-y-4 lg:space-y-0 lg:space-x-8 p-4 pt-0">
      {/* Canvas for the game */}
      <canvas
        ref={canvasRef}
        width="800"
        height="800"
        className="flex-shrink-0"
      ></canvas>

      <div className="flex flex-col items-start justify-evenly w-full lg:w-auto space-y-4">
        {/* AmountComponent (Bank Balance Display) */}
        <AmountComponent />

        {/* Bid input field */}
        <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-400 w-full max-w-xs">
          <input
            type="number"
            id="bid"
            value={bidAmount}
            step="any"
            onChange={handleInputChange}
            className="w-full px-4 py-2 focus:outline-none rounded-md"
            placeholder="Enter your bid"
            min="0"
          />
          <span className="px-4 text-gray-200">$</span>
        </div>

        {/* Error message for invalid input */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Button to add balls */}
        <button
          className="p-3 w-max bg-green-500 text-white rounded-md font-semibold shadow-md"
          onClick={handleAddBall}
        >
          Add Balls
        </button>
      </div>
    </div>
  );
}

export default Game;
