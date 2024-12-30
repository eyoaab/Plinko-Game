import {
  HEIGHT,
  WIDTH,
  ballRadius,
  obstacleRadius,
  sinkWidth,
} from "../constants";
import { createObstacles, createSinks } from "../objects";
import { pad, unpad } from "../paddings";
import { Ball } from "./Balls";

// BallManager handles the creation, management, and rendering of balls, obstacles, and sinks on a canvas.
export class BallManager {
  constructor(canvasRef, onFinish) {
    this.balls = [];
    this.canvasRef = canvasRef;
    this.context = this.canvasRef.getContext("2d");
    this.obstacles = createObstacles(); // Create obstacles for the game
    this.sinks = createSinks(); // Create sinks where balls will land
    this.update(); // Start the update loop
    this.onFinish = onFinish; // Callback to handle when a ball finishes
  }

  addBall(startX) {
    // Add a new ball to the game at the specified starting X position
    const newBall = new Ball(
      startX || pad(WIDTH / 2 + 13),
      pad(50),
      ballRadius,
      "red",
      this.context,
      this.obstacles,
      this.sinks,
      (index) => {
        this.balls = this.balls.filter((ball) => ball !== newBall);
        if (this.onFinish) this.onFinish(index, startX); // Call onFinish callback with ball index
      }
    );
    this.balls.push(newBall);
  }

  drawObstacles() {
    // Draw obstacles on the canvas
    this.context.fillStyle = "white";
    this.obstacles.forEach((obstacle) => {
      this.context.beginPath();
      this.context.arc(
        unpad(obstacle.x),
        unpad(obstacle.y),
        obstacle.radius,
        0,
        Math.PI * 2
      );
      this.context.fill();
      this.context.closePath();
    });
  }

  getColor(index) {
    // Determine the color of the sink based on its position in the array
    if (index < 3 || index >= this.sinks.length - 3) {
      return { background: "#ff003f", color: "white" };
    }
    if (index < 6 || index >= this.sinks.length - 6) {
      return { background: "#ff7f00", color: "white" };
    }
    if (index < 9 || index > this.sinks.length - 9) {
      return { background: "#ffbf00", color: "black" };
    }
    if (index < 12 || index > this.sinks.length - 12) {
      return { background: "#ffff00", color: "black" };
    }
    if (index < 15 || index > this.sinks.length - 15) {
      return { background: "#bfff00", color: "black" };
    }
    return { background: "#7fff00", color: "black" };
  }

  drawSinks() {
    // Draw the sinks on the canvas with rounded corners
    const SPACING = obstacleRadius * 2;

    for (let i = 0; i < this.sinks.length; i++) {
      const sink = this.sinks[i];
      const { x, y, width, height } = sink;
      const radius = 3;
      const reducedHeight = height * 0.9;
      const color = this.getColor(i);

      // Draw the background with rounded corners
      this.context.fillStyle = color.background;
      this.drawRoundedRect(
        x,
        y - reducedHeight / 2,
        (width - SPACING) * 1.1,
        height,
        radius
      );

      // Draw the text on the sink
      this.context.fillStyle = color.color;
      this.context.font = "bold 16px 'Comic Sans MS'";
      this.context.textBaseline = "middle";
      this.context.fillText(
        sink?.multiplier?.toString() + (i !== 0 && i !== 16 ? "x" : ""),
        x - 15 + sinkWidth / 2,
        y
      );
    }
  }

  // Helper function to draw rectangles with rounded corners
  drawRoundedRect(x, y, width, height, radius) {
    this.context.beginPath();
    this.context.moveTo(x + radius, y);
    this.context.lineTo(x + width - radius, y);
    this.context.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.context.lineTo(x + width, y + height - radius);
    this.context.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius,
      y + height
    );
    this.context.lineTo(x + radius, y + height);
    this.context.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.context.lineTo(x, y + radius);
    this.context.quadraticCurveTo(x, y, x + radius, y);
    this.context.closePath();
    this.context.fill();
  }

  draw() {
    // Clear the canvas and draw all game elements (obstacles, sinks, balls)
    this.context.clearRect(0, 0, WIDTH, HEIGHT);
    this.drawObstacles();
    this.drawSinks();
    this.balls.forEach((ball) => {
      ball.draw();
      ball.update();
    });
  }

  update() {
    // Update the game state and redraw
    this.draw();
    this.requestId = requestAnimationFrame(this.update.bind(this));
  }

  stop() {
    // Stop the game update loop
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }
  }
}
