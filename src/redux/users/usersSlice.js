import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

// Action creator that fetches users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    // Fetch API
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw Error('Failed to fetch users');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;