#!/bin/bash

# Usage: ./deploy.sh [frontend|backend]
SERVICE=$1

if [ -z "$SERVICE" ]; then
  echo "Error: No service specified. Usage: ./deploy.sh [frontend|backend]"
  exit 1
fi

echo "Starting deployment for: $SERVICE"

# 1. Pull the latest code
git pull origin main

# 2. Process based on service
case $SERVICE in
  frontend)
    echo "Updating Frontend..."
    cd frontend
    docker build -t my-app-frontend .
    docker stop frontend-container || true
    docker rm frontend-container || true
    docker run -d --name frontend-container -p 80:80 my-app-frontend
    ;;
  backend)
    echo "Updating Backend..."
    cd backend
    docker build -t my-app-backend .
    docker stop backend-container || true
    docker rm backend-container || true
    docker run -d --name backend-container -p 5000:5000 my-app-backend
    ;;
  *)
    echo "Invalid service: $SERVICE"
    exit 1
    ;;
esac

# 3. Cleanup dangling images to save space
docker image prune -f
echo "Deployment of $SERVICE completed."
