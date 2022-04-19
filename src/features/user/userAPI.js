import axios from 'axios';

import { loginStart, loginSuccess, loginFailure } from './userSlice';

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('https://bursapediary.com/users/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export default login;
