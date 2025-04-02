# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose the port Vite uses (default: 5173)
EXPOSE 5173

# Start the app (use preview mode for production-like serving)
CMD ["npm", "run", "preview"]