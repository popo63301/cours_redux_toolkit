// import de la fonction
import { createSlice } from "@reduxjs/toolkit";

// définit un state
const initialState = {
  loading: "idle",
  value: 0,
};

export const counterSlice = createSlice({
  // clé permettant d'identifier le reducer spécifique
  name: "counter",
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    incrementLoading(state, action) {
      state.loading = "pending";
    },
    incrementSuccess(state, action) {
      state.loading = "idle";
      state.value += 1;
    },
  },
});

export const { incrementLoading, incrementSuccess } = counterSlice.actions;

export const asyncIncrement = () => async (dispatch) => {
  dispatch(incrementLoading());
  await new Promise((resolve) => setTimeout(resolve, 3000));
  dispatch(incrementSuccess());
};
