import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSelectedProjectDetails = createAsyncThunk(
  'projects/fetchSelectedProjectDetails',
  (id) => {
    return fetch(`https://bursapediary.com/projects/${id}`)
      .then((response) => response.json())
      .then((data) => data.project);
  },
);

const selectedProjectSlice = createSlice({
  name: 'selectedProjectDetails',
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    selectedProjectDetails(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
    [fetchSelectedProjectDetails.pending](state) {
      state.status = 'loading';
    },
    [fetchSelectedProjectDetails.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
  },
});

export const { selectedProjectDetails } = selectedProjectSlice.actions;

export default selectedProjectSlice.reducer;
