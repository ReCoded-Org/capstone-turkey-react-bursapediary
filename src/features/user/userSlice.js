import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
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
