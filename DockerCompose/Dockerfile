FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=admin

RUN mkdir -p DockerCompose

COPY . /DockerCompose

CMD [ "node", "/DockerCompose/server.js" ]