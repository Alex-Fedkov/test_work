import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64650b89228bd07b3540a4d9.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=${page}&limit=3`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
