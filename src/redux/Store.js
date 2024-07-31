// Importing configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importing tasksReducer from tasksSlice
import tasksReducer from "./tasksSlice";

// Configuring the store with the tasks reducer
const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Assigning tasksReducer to handle the tasks state
  },
});

// Exporting the configured store as the default export
export default store;
