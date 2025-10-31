# Use Node.js base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port (if your app uses a specific port)
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]