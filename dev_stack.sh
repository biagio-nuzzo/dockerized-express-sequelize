#!/bin/bash  
echo "Starting development stack"
docker compose --env-file ./.env up -d node_db

echo "Waiting for database to start"
docker compose --env-file ./.env up --build


