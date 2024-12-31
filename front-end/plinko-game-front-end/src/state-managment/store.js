import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import gameReducer from "./game-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    game: gameReducer,
  },
});

export default store;
