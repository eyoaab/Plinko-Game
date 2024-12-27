// External imports
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

// Local imports
import { BallManager } from "../game/classes/BallManager";

// Constants
const GAME_API_URL = "https://plinko-game-2.onrender.com/game";

export function Game() {
  // State and references
  const [ballManager, setBallManager] = useState(null);
  const canvasRef = useRef(null);

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
      const response = await axios.get(GAME_API_URL, { data: 1 });
      if (ballManager) {
        ballManager.addBall(response.data.point);
      }
    } catch (error) {
      console.error("Error adding ball:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      {/* Canvas for the game */}
      <canvas ref={canvasRef} width="800" height="800"></canvas>

      {/* Button to add balls */}
      <button
        className="p-3 mb-4 w-max bg-green-500 rounded-md"
        onClick={handleAddBall}
      >
        Add balls
      </button>
    </div>
  );
}

export default Game;
