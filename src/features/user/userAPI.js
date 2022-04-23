import axios from 'axios';
import { toast } from 'react-toastify';

import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} from './userSlice';

const showErrorMessage = (error) => {
  // error message is in arrray or direct value in BE.
  let errorMessage = error.response.data[0]
    ? error.response.data[0].msg
    : error.response.data.message;

  errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
  toast.error(errorMessage, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('https://bursapediary.com/users/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    showErrorMessage(error);
    dispatch(loginFailure());
  }
};

const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    await axios.post('https://bursapediary.com/users/register', user);
    dispatch(registerSuccess());
  } catch (error) {
    showErrorMessage(error);
    dispatch(registerFailure());
  }
};
export { login, register };
