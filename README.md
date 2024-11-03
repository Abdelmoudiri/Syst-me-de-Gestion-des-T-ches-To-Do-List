Structure du Projet
Architecture du Code :
Séparation des fichiers pour un développement modulable :
index.html : Structure de la page.
style.css : Styles CSS pour l'apparence de la page.
app.js : Script JavaScript pour la logique de l'application.
Fonctionnalités Clés
Page d'accueil (HTML/CSS) :

Utiliser Tailwind CSS pour une mise en page responsive et moderne.
Présenter une liste de tâches ordonnée par statut.
Ajout de Tâches (Modal) :

Un modal interactif avec des champs pour le titre, la description, le statut, la date d'échéance et la priorité.
Styles CSS pour indiquer visuellement la priorité (rouge pour P1, orange pour P2, vert pour P3).
Liste de Tâches :

Afficher les tâches avec des badges de priorité et des icônes indiquant l'état.
Ajout d'une animation CSS lors de l'apparition d'une tâche.
Changer le Statut d'une Tâche :

Un système de modification rapide pour déplacer les tâches entre différents statuts (To Do, Doing, Done).
Statistiques :

Un widget montrant le nombre total de tâches et leur répartition par statut.
Suppression et Modification :

Options pour supprimer et modifier une tâche, avec une confirmation de suppression.
Validation des Formulaires :

Vérifications JavaScript pour s'assurer que tous les champs requis sont remplis avant l'ajout d'une tâche.
Filtrage et Tri :

Filtres pour trier les tâches par date d'échéance ou par priorité, implémentés avec des fonctions de tri en JavaScript.
Barre de recherche pour trouver des tâches par titre ou mots-clés.
Bonus
Drag and Drop : Utiliser la bibliothèque JavaScript native ou Sortable.js pour implémenter le drag-and-drop.
LocalStorage : Persistance des données pour permettre la récupération des tâches après un rechargement de la page.
Accessibilité (WCAG)
Utiliser des couleurs avec un bon contraste.
Ajouter des labels clairs aux champs de formulaire.
Support pour la navigation au clavier.
Déploiement
GitHub Pages pour l'hébergement.
Suivi des versions avec Git.
Technologies Utilisées
HTML5 pour la structure.
CSS3/Tailwind CSS pour le design et la responsivité.
JavaScript pour la logique et l'interactivité.
Git/GitHub pour le contrôle de version et l'hébergement.
Plan de Travail
Jour 1-2 : Configuration du projet, création de la structure HTML et des styles de base.
Jour 3 : Implémentation de la logique JavaScript pour ajouter, modifier, supprimer, et trier les tâches.
Jour 4 : Test et validation, ajout des fonctionnalités de filtrage et de recherche.
Jour 5 : Finalisation, optimisation de l'accessibilité, déploiement, et documentation.