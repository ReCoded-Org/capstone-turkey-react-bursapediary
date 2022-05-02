import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', () => {
  return fetch('https://bursapediary.com/projects')
    .then((response) => response.json())
    .then((data) => data.projects);
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    projectAdded(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
    [fetchProjects.pending](state) {
      state.status = 'loading';
    },
    [fetchProjects.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
  },
});

export const { projectAdded } = projectsSlice.actions;

export default projectsSlice.reducer;
