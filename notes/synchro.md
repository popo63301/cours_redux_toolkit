- react
- redux
- react-redux = binding

---

react-redux:

- Provider = appli -> store
- connect / hooks = composant -> store

---

Flow de Redux:

application = ens. d'actions

scenario = j'appuie sur un bouton, et je fais un traitement de donnée

---

bouton (UI) -> envoyer une action (dispatch) -> on passe les reducers -> modifie le store -> change l'UI

- store =

* objet js, ex: {name: "sofiane"}
* objet = ens. de branches (clé-valeur)
* branche (redux) = reducer
* store = database miniature (ce n'est pas une database)
* en vrai, store = variable globale accessible à n'importe qui

exemple de store =
{
books: {
"jk rowling": ["harry potter", "les animaux fantastiques"],
"tolkien": ["seigneur des anneaux"]
},
users: ["stan, "lucia", "sofiane"]
}

reducers possible = "books", "users"

- reducer =

* une partie du store

- action =

* objet js qui a une clé "type"
* directive = qui va décrire l'action + transmettre des données pour faire l'action
* c'est comme une commande
* makeHamburger:
  {
  type: "MAKE_HAMBURGER",
  payload: {
  tomate: 1,
  viande: 1,
  etc
  }
  }

- action creator =

* une fonction qui va générer des actions

- qui exécute l'action ? = c'est le reducer

- reducer =

* (state, action) => state
* va se présenter comme un switch case:
  - à chaque fois qu'on capte une action, on va voir si on peut le traiter

ex:
reducer books = {
"jk rowling": ["harry potter", "les animaux fantastiques"],
"tolkien": ["seigneur des anneaux"]
}

action = {
type: "ADD_NEW_BOOK",
payload: {
"author": "jk rowling",
"bookName": "Harry potter 8"
}
}

dans le reducer book, on a un cas dans le switch case pour ADD_NEW_BOOK,
après le traitement, on ajoute le livre,
donc le nouveau state, ressemble à ça:

{
"jk rowling": ["harry potter", "harry potter 8", les animaux fantastiques"],
"tolkien": ["seigneur des anneaux"]
}

(state, action) => state

- dispatch = envoyer action dans tout les reducers

* parce que action peut être traiter dans plein de reducers
* ensuite, le reducer va capturer l'action qu'il est en mesure de traiter
