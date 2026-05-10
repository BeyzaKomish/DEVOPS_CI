#!/bin/bash
# deploy.sh

echo "Pulling the latest Docker images from DockerHub..."
docker compose pull

echo "Applying updates to changed services..."
# This will ONLY recreate the containers that have new images (frontend & backend)
# Your Postgres DB will stay perfectly persistent and online!
docker compose up -d --remove-orphans

echo "Deployment complete!"