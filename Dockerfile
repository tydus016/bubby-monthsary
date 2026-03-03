# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Move assets to public folder (React requires static assets in public)
RUN mkdir -p public/assets && cp -r assets/* public/assets/ 2>/dev/null || true

# Expose port 3000
EXPOSE 3000

# Set environment variable for hot reload to work in Docker
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# Start the development server
CMD ["npm", "start"]
