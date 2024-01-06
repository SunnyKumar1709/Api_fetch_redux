// store setup using configureStore

import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reducers/dataSlice";

const store = configureStore({
  reducer: { dataReducer },
  preloadedState: {},
  devTools: true,
});

export default store;
