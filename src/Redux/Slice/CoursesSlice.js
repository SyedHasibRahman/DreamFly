import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "course/fetchCourses",
  async () => {
    const response = await fetch("http://localhost:5000/course").then((res) =>
      res.json()
    );
    return response;
  }
);
export const postCourses = createAsyncThunk(
  "course/postCourses",
  async (data) => {
    const response = await fetch("http://localhost:5000/course", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return response;
  }
);
export const deleteCourses = createAsyncThunk(
  "course/deleteCourses",
  async (id) => {
    const response = await fetch(
      `http://localhost:5000/course/deleteCourse/${id}`,
      {
        method: "delete",
      }
    ).then((res) => res.json());
    return response;
  }
);
export const updateCourses = createAsyncThunk(
  "course/updateCourses",
  async (data, id) => {
    const response = await fetch(`http://localhost:5000/course/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return response;
  }
);

const coursesSlice = createSlice({
  name: "course",
  initialState: {
    fetchCourses: [],
    loading: true,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.servicesFech = action.payload;
    });
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.servicesFech = action.payload;
    });
    builder.addCase(postCourses.fulfilled, (state, action) => {
      state.servicesFech = action.payload;
    });
    builder.addCase(postCourses.pending, (state, action) => {
      state.servicesFech = action.payload;
    });
    builder.addCase(deleteCourses.fulfilled, (state, action) => {
      state.servicesFech = action.payload;
    });
    builder.addCase(deleteCourses.pending, (state, action) => {
      state.servicesFech = action.payload;
    });
    builder.addCase(updateCourses.fulfilled, (state, action) => {
      state.servicesFech = action.payload;
    });
    builder.addCase(updateCourses.pending, (state, action) => {
      state.servicesFech = action.payload;
    });
  },
});

export default coursesSlice.reducer;
