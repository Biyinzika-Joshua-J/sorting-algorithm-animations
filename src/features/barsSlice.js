import { createSlice } from "@reduxjs/toolkit";
import { listGenerator } from "../utilities/generateRandomArray";

const initialState = {
  array: listGenerator(10, 300, 200),
  bars:200,
};

export const barsSlice = createSlice({
  name: "bars",
  initialState,
  reducers: {
    generateNewArray: (state, payload) => {
      state.array = listGenerator(10, 300, state.bars);
    },
    updateNumberOfBars : (state, payload) => {
        state.bars = payload.payload.data;
    },
    updateBarsToSortedOrder : (state, payload) => {
      const sortedVersion = payload.payload.sorted;
      if (sortedVersion.length > 1){
        state.array = payload.payload.sorted;
      }
    },
  },
});

export const { generateNewArray, updateNumberOfBars, updateBarsToSortedOrder } = barsSlice.actions;

export default barsSlice.reducer;
