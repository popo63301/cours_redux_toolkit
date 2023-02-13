// import de la fonction
import { createSlice } from "@reduxjs/toolkit";

// définit un state
const initialState = "...";

export const messageSlice = createSlice({
  // clé permettant d'identifier le reducer spécifique
  name: "message",
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    updateMessage(state, action) {
      return action.payload.toUpperCase();
    },
  },
});

export const { updateMessage } = messageSlice.actions;
