#!/bin/bash

sudo systemctl stop postgresql

npm i

npx prisma generate

sudo docker compose -f docker-compose.pg.yml up --build -d --remove-orphans && \

sudo docker compose -f docker-compose.el.yml up --build -d --remove-orphans && \

sudo docker compose -f docker-compose.api.yml up --build -d --remove-orphans && \

echo -e "\u001b[38;5;10m🐋 docker started.\n"