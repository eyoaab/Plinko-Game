# Plinko Game

This repository contains the source code for a Plinko game built using the MERN (MongoDB, Express, React, Node.js) stack. The project allows users to play the Plinko game and keep track of scores.
## Features

- Interactive Plinko game board built using React
- Real-time score calculation
- User authentication 
- RESTful API for managing scores and users

## Tech Stack

- **Backend**: Node.js (Express.js)
- **Database**: MongoDB (Mongoose)
- **API Format**: RESTful API
- **Authentication**: JSON Web Tokens (JWT)
- **Frontend**: React
- **Styling**:TelwindCss

---

  ## Installation
  
  1. Clone the repository:
  ```bash
  git clone https://github.com/eyoaab/Plinko-Game
  ```
  2. Configure the Backend:
  ```bash
  cd backend
  npm instal
  ```
  3. Configure the Frontend:
  ```bash
  cd front-end/plinko-game-front-end
  npm instal
  ```

  4.Set up environment variables:
  - Create a .env file in the root directory.
  - Add the following variable
  ```bash
  PORT=3000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_secret_key
  
  ```
  5.start the server
  ```bash
  node backend/server.js
  ```

  6.Run the front-end
  ```bash
  cd front-end/plinko-game-front-end
  npm start
  
  ```
## Folder Structure
```bash
Plinko-Game/
├──backend/        
  ├── controllers/         # API logic for users and blogs
  ├── models/              # Mongoose schemas
  ├── routes/              # Route handlers for the API
  ├── middleware/          # Custom middleware (e.g., auth)
  ├── config/              # Configuration files (e.g., database connection)
  ├── .env                 # Environment variables
  ├── app.js               # Configuration with middlewares
  ├── server.js            # Main application entry point
  ├── package.json         # Dependencies and scripts
├──front-end/plinko-game-front-end/
  ├── public/               # To store some public datas of the project
  ├── src/                  
     ├── game/              # Contains game page and logic
     ├── use/r              # Contains Login and Signup Pages
     ├── state-managment/   # Contains State Managment logic using react-redux
     ├── app.jsx            # Routing Entry Point // Higer level conponent
  ├── tailwind.config.js    # configurations for telwind css
  ├── package.json          # Dependencies and scripts

```
---

## Using the Deployed Backend

If you prefer to use the already deployed version of the backend, follow these steps:

1. **Base URL**:  
🔗 Use the deployed API base URL for all requests: => [https://plinko-game-2.onrender.com](https://plinko-game-2.onrender.com)
2. **Authentication**:  
- Most endpoints require authentication. Ensure you obtain a valid JSON Web Token (JWT) by logging in via the `/users/login` endpoint.
- Include the token in the `Authorization` header for subsequent requests:
  ```json
  {
    "Authorization": "Bearer your_token_here"
  }
  ```

3. **Available Endpoints**:  
---

## **User Endpoints**
| Method | Endpoint                  | Description                              |
|--------|---------------------------|------------------------------------------|
| POST   | `/users/`                 | Sign up a new user                       | 
| POST   | `/users/login`            | Log in an existing user                  |
| Put    | `/users/:id`              | Update users information                 |
---

## **Game EndPoint**
| Method | Endpoint                  | Description                             |
|--------|---------------------------|-----------------------------------------|
| GET    | `game/`                   | Get A pattern for the G                 |

---


4. **Testing the API**:  
- Use tools like **Postman**, **cURL**, or any API testing tool to interact with the backend.  
- For example, to fetch all blogs:  
  ```bash
  curl -X GET https://plinko-game-2.onrender.com
  ```

5. **Error Handling**:  
- If an error occurs, the response will include a status code and a descriptive message. For example:
  ```json
  {
    "error": "Unauthorized access"
  }
  ```

---


   
