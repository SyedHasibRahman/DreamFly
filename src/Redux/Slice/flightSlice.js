import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flight",
  initialState: {
    filterDate: [],
    dateAndPass: [],
    loading: true,
  },
  reducers: {
    addFilterData: (state, action) => {
      state.filterDate = action.payload;
    },
    addDateAndPass: (state, action) => {
      state.dateAndPass = action.payload;
    },
  },
});
export const { addFilterData, addDateAndPass } = flightSlice.actions;
export default flightSlice.reducer;
