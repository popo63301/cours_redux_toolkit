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

<------------------------------

Exemple de simon:

```js
useEffect(() => {
  dispatch(fetchProducts());
}, []);
```

définition fetchProducts = thunk (fonction qui retourne une fonction)

```js
export const fetchProducts = () => async (dispatch) => {
  const response = await fetchProductsAPI();
  dispatch(productsReceived(response));
};
```

- appel de fetchProducts =
  const fetch = fetchProducts()
  | // donne
  v

```js
const fetch = async (dispatch) => {
  const response = await fetchProductsAPI();
  dispatch(productsReceived(response));
};
```

//---------------- petit rappel

action synchro = objet

exemple:

```js
{
  type: "ADD_TODO";
  payload: {
    title: "go to grocery";
  }
}
```

action asynchro = function (aussi appelé thunk)

exemple:

```js
export const fetchProducts = () => async (dispatch) => {
  const response = await fetchProductsAPI();
  dispatch(productsReceived(response));
};
```

//----------------

quand on dispatch un thunk que se passe-t-il ?

```js
dispatch(fetchProducts());
```

Le thunk va être intercepté par le middleware Redux Thunk.

Le middleware redux thunk ressemble à ça:

```js
const thunkMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // action = action qui a été dispatché
    // c'est a dire, ce qui est à l'intérieur du dispatch
    // exemple: dispatch(addTodo()) / action = contenu de addTodo()
    // exemple: disaptch(fetchProducts()) / action ici = fetchProducts() = fonction résultant de l'appel de la fonction
    if (typeof action === "function") {
      // on regarde si notre action est de type fonction
      return action(dispatch, getState); // si c'est le cas, on execute la fonction avec dispatch
    }

    // si c'est pas le cas, on exécute l'action dans les reducers de manière classique
    // cas synchro
    return next(action);
  };
```

Je vous rassure, vous n'avez pas à le créer vous même, il est pré-installé avec redux toolkit.
Sur redux classique, il faut l'installer (regardez la doc de redux-thunk).
