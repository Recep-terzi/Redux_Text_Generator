import { configureStore } from "@reduxjs/toolkit";
import generatorSlice from "./generateSlice";
export const store = configureStore({
  reducer: {
    genarator: generatorSlice,
  },
});
