import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/update.js";

export const store = configureStore({
  reducer: {
    data: dataReducer, 
  },
});
