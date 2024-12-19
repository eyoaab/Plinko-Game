import React, { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";

export function Game() {
  const [ballManager, setBallManager] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ballManagerInstance = new BallManager(canvasRef.current);
      setBallManager(ballManagerInstance);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <button
        className="px-10 mb-4"
        onClick={async () => {
          try {
            const response = await axios.get('https://plinko-game-2.onrender.com/game', { data: 1 });
            if (ballManager) {
              ballManager.addBall(response.data.point);
            }
          } catch (error) {
            console.error("Error adding ball:", error);
          }
        }}
      >
        Add balls
      </button>
    </div>
  );
}
