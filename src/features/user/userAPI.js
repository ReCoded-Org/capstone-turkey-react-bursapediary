import axios from 'axios';
import { toast } from 'react-toastify';
import { persistor } from '../../app/store';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  cleanState,
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

    // normalize the backend data which gives id and name as a message
    const messageArr = res.data.message.split(' ');

    const dataObj = {
      username: messageArr[4],
      id: messageArr[7],
      token: res.data.token,
    };

    dispatch(loginSuccess(dataObj));
    toast.success('Logged in successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
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
    toast.success('Registered successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    showErrorMessage(error);
    dispatch(registerFailure());
  }
};

const logout = async (dispatch) => {
  dispatch(cleanState()); // makes the state as initial
  await persistor.purge();
  toast.success('Logout successfully', {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export { login, register, logout };
