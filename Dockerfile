
# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy built React files into the container
COPY build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx runs on
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
