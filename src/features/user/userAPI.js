import axios from 'axios';

import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} from './userSlice';

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('https://bursapediary.com/users/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    await axios.post('https://bursapediary.com/users/register', user);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure());
  }
};
export { login, register };
