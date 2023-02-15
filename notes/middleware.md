Définition d'un middleware =

- Fonction qui va s'appliquer avant chaque appel d'action Redux

---

Logger = middleware qui va faire un console.log du nom de l'action avant chaque exécution d'action

Pour créer un middleware, il faut suivre une signature de fonction.

```js
const middleware = (store) => (next) => (action) => {
  // vous faites ce que vous voulez ici
};
```

plus de détails = https://redux.js.org/understanding/history-and-design/middleware

### Installer un middleware

Dans configureStore, inclure la partie middleware:

```js
const monMiddleware = store => next => action =>  {...}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(monMiddleware),
})
```

### Qu'est-ce qu'il se passe quand on installe un middleware

je dispatch mon action -> l'action passe par le middleware -> le middleware décide si on passe à la suite (next) -> l'action est traitée avec le reducer

### Actions possible

```js
const middleware = (store) => (next) => (action) => {
  // store = {dispatch, getState}

  // lire le state du store
  store.getState();

  // dispatcher une nouvelle action

  store.dispatch(monAction());
};
```
