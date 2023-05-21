import { createSlice } from '@reduxjs/toolkit';

const myFollowersSlice = createSlice({
  name: 'myFollowers',
  initialState: [],
  reducers: {
    addFollower(state, action) {
      state.push(action.payload);
    },
    removeFollower(state, action) {
      const index = state.findIndex(({ id }) => id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addFollower, removeFollower } = myFollowersSlice.actions;
export const myFollowersReducer = myFollowersSlice.reducer;
