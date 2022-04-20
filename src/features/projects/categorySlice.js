import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSpecificCategory = createAsyncThunk(
  'projects/fetchSpecificCategory',
  (category) => {
    return fetch(
      `https://bursapediary.com/projects/filter?category=${category}`,
    )
      .then((response) => response.json())
      .then((data) => data);
  },
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    selectedCategory(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
    [fetchSpecificCategory.pending](state) {
      state.status = 'loading';
    },
    [fetchSpecificCategory.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
  },
});

export const { selectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
