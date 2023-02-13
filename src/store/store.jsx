import { configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "./messageSlice";

// Export des actions
const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
  },
});

// pour contextualiser le store dans l'arbre React
export default store;
