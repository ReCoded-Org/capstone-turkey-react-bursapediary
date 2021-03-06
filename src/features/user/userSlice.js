import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null, // it will include username, id and token as an object
    isLoading: false,
    isSuccessLogin: false,
    isSuccessRegister: false,
    isError: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccessLogin = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isError = false;
      state.isSuccessLogin = true;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccessLogin = false;
    },
    registerStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccessRegister = false;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccessRegister = true;
    },
    registerFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccessRegister = false;
    },
    cleanState: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.isSuccessLogin = false;
      state.isSuccessRegister = false;
      state.isError = false;
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
  cleanState,
} = userSlice.actions;

export default userSlice.reducer;
