// import de la fonction
import { createSlice } from "@reduxjs/toolkit";

// définit un state
const initialState = {
  loading: "idle",
  users: [],
};

export const userSlice = createSlice({
  // clé permettant d'identifier le reducer spécifique
  name: "users",
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    usersLoading(state, action) {
      console.log("ici 1");
      state.loading = "pending";
    },
    usersReceived(state, action) {
      console.log("ici 2", action);
      state.loading = "idle";
      state.users = action.payload.map((e) => e.first_name);
    },
  },
});

export const { usersLoading, usersReceived } = userSlice.actions;

const fetchUserAPI = () =>
  fetch("https://reqres.in/api/users").then((response) => response.json());

// call API sous forme de thunk
export const fetchUsers = () => async (dispatch) => {
  dispatch(usersLoading());
  const response = await fetchUserAPI();
  dispatch(usersReceived(response.data));
};
