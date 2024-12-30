# Utiliser une image Node.js compatible
FROM node:20

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers package.json et yarn.lock
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install --ignore-engines --unsafe-perm --no-bin-links

# Copier le reste du code
COPY . .

# Générer Prisma Client
RUN yarn prisma generate

# Exposer le port du backend
EXPOSE 3000

# Démarrer le serveur
CMD ["yarn", "start:dev"]
