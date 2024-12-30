1. Prérequis
    Node.js v20+
    Yarn v1.22+
    Docker & Docker Compose
    MySQL 5.7 (ou via Docker)
2. Installation Backend
  - Naviguer dans le dossier backend :
        cd backend
  - Configurer l'environnement :
        Copier le fichier .env.example en .env.
        Ajuster les valeurs (base de données, mots de passe, etc.).
  - Installer les dépendances :
        yarn install
  - Configurer la base de données :
        yarn prisma migrate dev
        yarn prisma generate
  - Démarrer le serveur :
        yarn start:dev
  - Tester les endpoints API :

        GET /tasks → Obtenir toutes les tâches.
        POST /tasks → Créer une nouvelle tâche.
        PUT /tasks/:id → Modifier une tâche existante.
        DELETE /tasks/:id → Supprimer une tâche.

3. Installation Frontend
  - Naviguer dans le dossier frontend :
        cd frontend
  - Installer les dépendances :
        yarn install
  - Démarrer le serveur :
        yarn start
  - Accéder à l'application :

        Page d'accueil : http://localhost:3000
        Page Todo List : http://localhost:3000/todo

4. Fonctionnalités Principales
    - Backend (NestJS)
      - API REST complète pour la gestion des tâches.
      - Endpoints CRUD (GET, POST, PUT, DELETE).
      - Base de données MySQL avec Prisma ORM.
      - Gestion des erreurs et validation des données.
    - Frontend (React)
      - Affichage dynamique de la liste des tâches.
      - Création, modification et suppression des tâches.
      - Validation du formulaire et gestion de l'état des boutons.
      - Notifications utilisateur via react-toastify.
      - Thème clair/sombre avec Material-UI.
5. Fonctionnement de l'Application
      - Créer une tâche : Ajouter un titre et une description.
      - Modifier une tâche : Éditer une tâche existante.
      - Supprimer une tâche : Retirer une tâche de la liste.
      - Basculer le thème : Passer du thème clair au sombre.
      - Notifications : Les actions importantes affichent une notification.
6. Tester l'Application
Assurez-vous que le Backend est lancé :

        cd backend
        yarn start:dev

Lancez le Frontend :

        cd frontend
        yarn start

Ouvrez l'application :

        http://localhost:3000 → Page d'accueil.
        http://localhost:3000/todo → Gestion des tâches.

7. Décisions Techniques
  - NestJS pour une architecture robuste côté backend.
  - Prisma ORM pour une gestion efficace de la base de données.
  - React + Material-UI pour une interface utilisateur moderne.
  - React-Toastify pour les notifications.
  - Docker Compose pour faciliter le déploiement local.
8. Améliorations Possibles
  - Ajouter une fonctionnalité de recherche.


9. Auteur
Développé par : Reda Belcadi
Technologies Utilisées : NestJS, React, Prisma, Material-UI, Docker

10. Déploiement avec Docker
    Lancer le Backend et la Base de Données :

        cd backend
        docker-compose up --build

    Accéder à l'API Backend :

        http://localhost:3000
