#!/bin/bash
# Path: /home/seid/pro/deploy.sh
set -e 

echo "--- Deployment Started ---"

# 1. Sync code from repository
git pull origin main

# 2. Build and restart everything
# --build: Forces a rebuild of images if code changed
# -d: Detached mode (runs in background)
# --remove-orphans: Cleans up containers if you renamed/removed services
echo "Updating containers..."
docker-compose up -d --build --remove-orphans

# 3. Database Maintenance (Optional but recommended)
# You might want to run migrations here if your framework supports it
# Example: docker-compose exec -T backend npm run migrate

# 4. Cleanup
docker image prune -f

echo "--- Deployment Finished Successfully ---"
