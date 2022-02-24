import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./Slice/CoursesSlice";
import UserSlice from "./Slice/UserSlice";
import flightSlice from "./Slice/flightSlice";

export const store = configureStore({
  reducer: {
    coursesSlice: coursesSlice,
    user: UserSlice,
    flightSlice: flightSlice,
  },
});
