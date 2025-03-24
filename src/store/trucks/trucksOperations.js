import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = createAsyncThunk(
  'trucks/getTrucks',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { page, limit } = state.trucks.pagination;
    const filters = state.trucks.queryFilters;
    try {
      const { data } = await axios.get(
        `/campers?page=${page}&limit=${limit}&${filters}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperInfo = createAsyncThunk(
  'trucks/CamperInfo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
