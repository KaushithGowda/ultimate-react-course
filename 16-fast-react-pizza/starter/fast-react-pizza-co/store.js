import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./src/features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
