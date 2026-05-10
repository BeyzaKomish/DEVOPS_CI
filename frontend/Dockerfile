# Stage 1: Build the React application with Vite
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code and build it
COPY . .
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy the built Vite assets from the 'dist' folder to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]