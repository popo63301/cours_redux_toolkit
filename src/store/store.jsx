import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { messageSlice } from "./messageSlice";
import { userSlice } from "./userSlice";

// Export des actions
const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
    users: userSlice.reducer,
    counter: counterSlice.reducer,
  },
});

// pour contextualiser le store dans l'arbre React
export default store;
