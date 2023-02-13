exemple redux-toolkit:

input= "écrire un message"

résultat = "le message en majuscule"

---

MVC

Model = datas
View = Composants visuels
Controller = connection entre les 2

View = quels sont nos composants ?

Nos composants:

- Input
- Result

---

Model = quelle est la structure de nos données ?

- quelles sont nos données ?

Nos données:

- message

{
message: "LA VALEUR DE NOTRE MESSAGE"
}

---

Controller = quelles sont nos actions ?

action =

- updateMessage

---

Exercice =

- faire un compteur "synchro" avec comme actions
  - increment
  - decrement
  - reset to 0

---

immutabilité

avant redux:

- il fallait respecter des règles d'immutabilités

* on ne peut pas modifier state comme ça,
* il faut créer des copies à chaque fois

liste:

- ajouter élément: pas list.push() / [...list, nouvelElement ]

objet:

- ajouter élément: {...ancienObj, key: "value" }

Maintenant, on peut directement des opérations directes, dans les reducers, parce que derrière, Redux toolkit utilise =

- Immer
