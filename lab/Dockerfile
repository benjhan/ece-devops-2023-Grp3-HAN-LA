# Utilisez une image de base existante
FROM node:alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json (s'ils existent) dans le conteneur
COPY package*.json /app/

# Nettoyez le cache npm et installez les dépendances
RUN npm cache clean --force && npm install

# Copiez tout le reste de l'application dans le conteneur
COPY . /app/

# Exposez le port sur lequel l'application écoute
EXPOSE 3000

# Commande par défaut pour démarrer l'application en mode dev
CMD ["npm", "run", "dev"]
