import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../../config/secret';


// Thunk to fetch courses
export const fetchStudent = createAsyncThunk('image/student',
  async () => {
    const response = await axios.get(`${api}/slider/images/student`); // Fixed response declaration
    console.log(response)
    return response.data.studentImages;
  }
);

export const fetchTeacher = createAsyncThunk('image/teacher',
  async () => {
    const response = await axios.get(`${api}/slider/images/teacher`); // Fixed response declaration
    console.log(response)
    return response.data.teacherImages;
  }
);

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    students: [],
    teachers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudent.fulfilled, (state, action) => { // Added action parameter
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudent.rejected, (state, action) => { // Added action parameter for error handling
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeacher.fulfilled, (state, action) => { // Added action parameter
        state.loading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchTeacher.rejected, (state, action) => { // Added action parameter for error handling
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sliderSlice.reducer;
