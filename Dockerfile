# Use the official Node.js image as the base image
FROM node:16.20.0

# Set the working directory inside the Docker image
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

# Install the dependencies
RUN npm install


# Specify the command to start your Node.js application
CMD [ "npm", "run", "start:node" ]
