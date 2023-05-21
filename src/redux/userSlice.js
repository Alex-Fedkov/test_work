import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    page: 1,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchUsers.pending](state) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.page += 1;
      state.users.push(...action.payload);
    },
    [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
