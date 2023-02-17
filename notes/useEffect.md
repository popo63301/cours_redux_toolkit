Lifecycle React

avant = composant class + fonction lifecycle

- componentDidMount = quand le composant apparaît
- componentWillUnmount = quand le composant disparaît
- componentDidUpdate = quand le composant change

doc = https://reactjs.org/docs/react-component.html

---

maintenant = composant fonctionnel + useEffect

useEffect = toute les fonctions lifecycle en 1

```js
useEffect(() => {
  // fonction à exécuter
}, []);
```

- équivalent componentDidMount = premier render, on exécute l'intérieur du useEffect une fois

```js
useEffect(() => {
  // on exécute ici une fois
  console.log("je serai executé une fois d'abord");
}, []);
```

- équivalent componentDidUpdate = si il y a une variable dans la liste en second paramètre, alors on va tracker à chaque modification de ces variables

```js
useEffect(() => {
  // on exécute ici une fois
  console.log(
    "je serai executé une fois d'abord puis à chaque modification de counter car il est dans la liste"
  );
}, [counter]);
```

Si la liste en second paramètre est vide, alors, la fonction sera exécuté une fois seulement.

```js
useEffect(() => {
  const datas = monCallAPI(); // sera exécuté une fois seulement
}, []);
```

liste vide ([]) = on exécute fonction une fois seulement et plus jamais après

- équivalent componentWillUnmount = il faut retourner une fonction dans le useEffect, qui sera exécuté au moment de la disparition du composant

```js
useEffect(() => {
  console.log("execution une fois seulement");

  return () => {
    // code à exécuter à la mort du composant
    console.log("execution une fois seulement MAIS à la fin seulement");
  };
}, []);
```
