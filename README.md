# ELK Stack - Elasticsearch with NestJS, Kibana, Logstash, Winstion

ELK stack with NestJS sample + Dockerize

## Run Application 

```sh
$ chmod +x run.sh
$ run.sh
```

### Run Docker Compose

```sh
# Run nest api & pg migration:
sudo docker compose -f docker-compose.api.yml up

# Run pg and prisma studio
sudo docker compose -f docker-compose.pg.yml up

# Run elasticsearch
sudo docker compose -f docker-compose.el.yml up

```
