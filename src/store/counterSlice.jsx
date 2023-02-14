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
    counterLoading(state, action) {
      state.loading = "pending";
    },
    incrementSuccess(state, action) {
      state.loading = "idle";
      state.value += 1;
    },
    decrementSuccess(state, action) {
      state.loading = "idle";
      state.value -= 1;
    },
  },
});

const { counterLoading, incrementSuccess, decrementSuccess } =
  counterSlice.actions;

// fonction asynchro
export const asyncIncrement = () => async (dispatch) => {
  dispatch(counterLoading());
  await new Promise((resolve) => setTimeout(resolve, 3000)); // attendre 3 secondes
  dispatch(incrementSuccess());
};

export const asyncDecrement = () => async (dispatch) => {
  dispatch(counterLoading());
  await new Promise((resolve) => setTimeout(resolve, 3000)); // attendre 3 secondes
  dispatch(decrementSuccess());
};
