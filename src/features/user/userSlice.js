import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isError = false;
      state.isSuccess = true;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },
    registerStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isError = false;
      state.isSuccess = true;
    },
    registerFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;

export default userSlice.reducer;
