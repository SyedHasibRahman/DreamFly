import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./Slice/CoursesSlice";
import UserSlice from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    coursesSlice: coursesSlice,
    user: UserSlice,
  },
});
