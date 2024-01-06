import { createSlice } from "@reduxjs/toolkit";

// creating an empty array for the initial state of redux store.

const initialState = {
  data: [],
};

// defining a function to create slicing of redux store.
export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
