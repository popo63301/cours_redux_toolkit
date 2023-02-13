import { configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "./messageSlice";
import { userSlice } from "./userSlice";

// Export des actions
const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
    users: userSlice.reducer,
  },
});

// pour contextualiser le store dans l'arbre React
export default store;
