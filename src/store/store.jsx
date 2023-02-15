import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { messageSlice } from "./messageSlice";
import { userSlice } from "./userSlice";
import loggerMiddleware from "./middleware/logger";

// Export des actions
const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
    users: userSlice.reducer,
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

// pour contextualiser le store dans l'arbre React
export default store;
