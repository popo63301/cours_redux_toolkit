- actions synchro
- actions asynchros

synchro = action simple avec changement simple
asynchro = ensemble d'événements

exemple call API = Promesse

Promesse = 3 événements

- pending (en cours)
- fulfilled (succès)
- failure (échec)

---

synchro =

- action -> reducer -> store -> UI

asynchro =

- plusieurs actions

asynchro redux = thunk = function

exemple call API avec redux simple:

```js
dispatch(getUserLoading());

const resp = await getUser();

if (resp) {
  dispatch(getUserSuccess(resp));
} else {
  dispatch(getUserFailure());
}
```

cas redux à l'ancienne

https://www.digitalocean.com/community/tutorials/redux-redux-thunk

---

Mettre en place Redux Thunk

on doit utiliser middleware

middleware =

- transformation
- qui peut s'enchaîner avec d'autres (pour créer une chaîne de middleware)

middleware =

- entrée -> transformation -> entrée modifiée

exemple de modification/transformation:

- logger
  - à chaque action qu'on dispatch, faire un console log de l'action, et ensuite exécuter l'action dans le reducer
- persistance du store
  - à chaque modification du store, donc à chaque émission d'action, enregistrer le nouveau store dans le local storage

https://redux.js.org/usage/writing-logic-thunks#how-does-the-middleware-work

---

sans create async thunk

```js
const fetchUsers = () => async (dispatch) => {
  dispatch(usersLoading());
  const response = await usersAPI.fetchAll();
  dispatch(usersReceived(response.data));
};
```

avec create async thunk

```js
const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchAll();
    return response.data;
  }
);
```

---

Exemple = fetch user

https://redux-toolkit.js.org/usage/usage-guide#defining-async-logic-in-slices

---

Exercice =

- Créer un compteur asynchrone qui va incrémenter à chaque clique au bout de 3 secondes, et disable le bouton avant la fin des 3 secondes

```js
const TIMER = 1000;
const counter = (count) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count);
    }, TIMER);
  });
```
