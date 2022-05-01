import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const postReview = createAsyncThunk(
  'review/postReview',
  async (myData) => {
    const { projectId, content, token } = myData;
    return fetch(`https://bursapediary.com/projects/${projectId}/reviews`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => data);
  },
);

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    addReview(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
    [postReview.pending](state) {
      state.status = 'loading';
    },
    [postReview.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
  },
});

export const { addReview } = reviewSlice.actions;

export default reviewSlice.reducer;
