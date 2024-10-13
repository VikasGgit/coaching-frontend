import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../../config/secret';


// Async thunk to fetch data
export const fetchData = createAsyncThunk('mis/fetchData',
  async () => {
    const response = await axios.get(`${api}/mis/all`);
    console.log(response);
    return response.data;
  }
);

const miscSlice = createSlice({
  name: 'mis',
  initialState: {
    misc: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.misc = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default miscSlice.reducer;
