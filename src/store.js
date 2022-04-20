import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './features/projects/projectsSlice';
import categoryReducer from './features/projects/categorySlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    category: categoryReducer,
  },
});

export default store;
