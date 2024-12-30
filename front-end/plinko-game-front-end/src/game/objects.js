import {
  HEIGHT,
  NUM_SINKS,
  WIDTH,
  obstacleRadius,
  sinkWidth,
} from "./constants";
import { pad } from "./paddings";

// MULTIPLIERS defines the score multipliers for each sink
const MULTIPLIERS = {
  1: 100,
  2: 50,
  3: 25,
  4: 9,
  5: 4,
  6: 2,
  7: 1,
  8: 0.5,
  9: 0.1,
  10: 0.5,
  11: 1,
  12: 2,
  13: 4,
  14: 9,
  15: 25,
  16: 50,
  17: 100,
};

// createObstacles generates an array of obstacle objects arranged in rows and columns
export const createObstacles = () => {
  const obstacles = [];
  const rows = 18;
  for (let row = 2; row < rows; row++) {
    const numObstacles = row + 1;
    const y = 0 + row * 35;
    const spacing = 36;
    for (let col = 0; col < numObstacles; col++) {
      const x = WIDTH / 2 - spacing * (row / 2 - col);
      obstacles.push({ x: pad(x), y: pad(y), radius: obstacleRadius });
    }
  }
  return obstacles;
};

// createSinks generates an array of sink objects with assigned positions and multipliers
export const createSinks = () => {
  const sinks = [];
  const SPACING = obstacleRadius * 2;

  for (let i = 0; i < NUM_SINKS; i++) {
    const x =
      WIDTH / 2 + sinkWidth * (i - Math.floor(NUM_SINKS / 2)) - SPACING * 1.5;
    const y = HEIGHT - 170;
    const width = sinkWidth;
    const height = width;
    sinks.push({ x, y, width, height, multiplier: MULTIPLIERS[i + 1] });
  }

  return sinks;
};
