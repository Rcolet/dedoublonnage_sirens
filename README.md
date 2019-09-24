# Dédoublonnage de SIRENs

## Enoncé

### Version Back

Sois, le fichier [sirens_fxt.txt](http://corporama.com/carabistouilles/sirens_fxt.txt) contenant une liste de SIRENs

On veut ajouter une fonctionnalité qui fait l'analyse de ce fichier (envoyé par un utilisateur) et récupérer le nombre de SIRENs qui sont présents au moins deux fois dans le fichier et le nombre de SIRENs qui ne sont présents qu'une fois.

 - Ouvrir le fichier et en extraire les SIRENs
 - Le parcourir pour en extraire les deux statistiques demandées
 - Présenter le résultat, même de manière "brute"

Contraintes:

 - L'algo doit être le plus rapide possible
 - Inclure des tests unitaires pour valider le code
 - Doit s'éxecuter sous GNU/Linux (avec notice de compilation/lancement si non trivial)

Pas de langage imposé

### Version Front

Faire la même chose en utilisant JQuery sur [sirens_fxt.html](http://corporama.com/carabistouilles/sirens_fxt.html), mais en plus de présenter le résultat statistique, utiliser des classes CSS permettant de faire ressortir les SIRENs uniques

 - Tout intégrer dans sirens_fxt.html
 - Le résultat visuel sera pris en compte
 - Tests unitaires non demandés (mais pourquoi pas)

## Réalisation

### Back 

Pour ce faire, j'ai choisi de mettre en Back du NodeJS en utilisant les module "Express" pour la route, "fs" pour la lecture du fichier et le module "cors" pour éviter le blocage d’une requête multiorigines coté client.

### Front

Pour ce faire, j'ai suivi au mieux les instructions. J'ai donc utilisé de l'Ajax pour faire une requête et avoir une réponse du serveur contenant toutes les informations dont j'avais besoin.

## Exécution

Pour commencer, [cloner](https://github.com/Rcolet/dedoublonnage_sirens.git) ou [télécharger](https://codeload.github.com/Rcolet/dedoublonnage_sirens/zip/master) le repo.

### Back

De mon coté, j'ai utilisé la version 10.16.3 de Node et 6.9.0 de npm

Pour l'installation de ceux-ci, je vous renvoie vers le site officiel de [Node.js](https://nodejs.org/en/)

Pour commencer exécuté la commande suivante pour installer les différents modules npm :

```Bash
> npm install
```

Ensuite executé la commande suivante pour lancer le serveur node :

```Bash
> npm start
````

Voilà :) Vous avez dès à présent le serveur lancer sur le port 7777. Essayé sur un logiciel comme Postman l\'url "http://127.0.0.1:7777/" ou directement sur un navigateur. Vous allez avoir un premier aperçu du résultat.

### Front

Si tout se passe bien du coté Back, vous n'avez qu'à ouvrir le fichier "sirens_fxt.html" sur un navigateur est c'est finis :) Vous aurez le résultat final de mon exercice ^^

### Test Unitaire

Pour exécuter les test unitaire, mettez la commande suivante :

```Bash
> npm test
```