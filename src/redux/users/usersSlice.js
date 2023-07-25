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
    const data = response.json();
    console.log(data.results);
    console.log(data.results.name);
    return data.results;
  } catch (error) {
    throw Error('Failed to fetch users');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default usersSlice.reducer;