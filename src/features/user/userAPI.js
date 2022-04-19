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

/* export const signup = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    const friend = await publicRequest.put('/users/cosmic/add', {
      _id: res.data._id,
    });
    const conversation = await publicRequest.post('/conversations', {
      senderId: res.data._id,
      receiverId: 'WwhdtvyklGhh',
    });
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};
 */
