import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../../config/secret';



// Thunk to fetch courses
export const fetchCourses = createAsyncThunk('course/fetchCourses',
  async () => {
    const response = await axios.get(`${api}/course`); // Fixed response declaration
    console.log(response)
    return response.data;
  }
);

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => { // Added action parameter
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => { // Added action parameter for error handling
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
