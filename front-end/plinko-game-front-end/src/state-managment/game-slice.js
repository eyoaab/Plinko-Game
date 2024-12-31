import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateScore(state, action) {
      state.score = action.payload;
    },
  },
});

export const { updateScore } = gameSlice.actions;

export default gameSlice.reducer;
