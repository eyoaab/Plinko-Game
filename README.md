# Plinko Game

This repository contains the source code for a Plinko game built using the MERN (MongoDB, Express, React, Node.js) stack. The project allows users to play the Plinko game, track scores, and manage user authentication.

## Features

- Interactive Plinko game board built using React
- Real-time score calculation
- User authentication with JWT
- RESTful API for managing scores and users
- Responsive design using Tailwind CSS

---

## Tech Stack

- **Backend**: Node.js (Express.js)
- **Database**: MongoDB (Mongoose)
- **API Format**: RESTful API
- **Authentication**: JSON Web Tokens (JWT)
- **Frontend**: React
- **Styling**: Tailwind CSS

---

## Installation

### Prerequisites:
- Node.js (v16 or later)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/eyoaab/Plinko-Game
   ```

2. Configure the Backend:
   ```bash
   cd backend
   npm install
   ```

3. Configure the Frontend:
   ```bash
   cd front-end/plinko-game-front-end
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables:
     ```bash
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```

5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

6. Start the frontend:
   ```bash
   cd ../front-end/plinko-game-front-end
   npm start
   ```
---

## Folder Structure

```bash
Plinko-Game/
├── backend/        
│   ├── controllers/         # API logic for users and scores
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Route handlers for the API
│   ├── middleware/          # Custom middleware (e.g., auth)
│   ├── config/              # Configuration files (e.g., database connection)
│   ├── .env                 # Environment variables
│   ├── app.js               # Express app setup with middleware
│   ├── server.js            # Main application entry point
│   ├── package.json         # Dependencies and scripts
├── front-end/plinko-game-front-end/
│   ├── public/               # Public assets (e.g., images, icons)
│   ├── src/                  
│   │   ├── game/             # Contains game page and logic
│   │   ├── user/             # Contains Login and Signup pages
│   │   ├── state-management/ # Contains state management logic (e.g., Redux)
│   │   ├── App.jsx           # Routing entry point
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   ├── package.json          # Dependencies and scripts
```

---

## Using the Deployed Backend

If you prefer to use the already deployed version of the backend, follow these steps:

1. **Base URL**:
   - Use the deployed API base URL for all requests: [https://plinko-game-2.onrender.com](https://plinko-game-2.onrender.com)

2. **Authentication**:
   - Most endpoints require authentication. Ensure you obtain a valid JSON Web Token (JWT) by logging in via the `/users/login` endpoint.
   - Include the token in the `Authorization` header for subsequent requests:
     ```json
     {
       "Authorization": "Bearer your_token_here"
     }
     ```

3. **Available Endpoints**:

### **User Endpoints**
| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| POST   | `/users/`         | Sign up a new user           |
| POST   | `/users/login`    | Log in an existing user      |
| PUT    | `/users/:id`      | Update user information      |

### **Game Endpoints**
| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| GET    | `/game/`          | Fetch game Pattern           |

4. **Testing the API**:
   - Use tools like **Postman**, **cURL**, or any API testing tool to interact with the backend.
   - For example, to fetch game pattern:
     ```bash
     curl -X GET https://plinko-game-2.onrender.com/game/
     ```

5. **Error Handling**:
   - If an error occurs, the response will include a status code and a descriptive message. For example:
     ```json
     {
       "error": "Unauthorized access"
     }
     ```

---
