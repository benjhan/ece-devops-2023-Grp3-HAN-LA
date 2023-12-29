# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 8080

# Run the app when the container launches
CMD ["node", "src/index.js"]
