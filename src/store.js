import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './features/projects/projectsSlice';
import categoryReducer from './features/projects/categorySlice';
import selectedProjectDetailsReducer from './features/projects/selectedProjectSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    category: categoryReducer,
    selectedProjectDetails: selectedProjectDetailsReducer,
  },
});

export default store;
