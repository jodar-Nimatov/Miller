import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Components/Theme/slice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
