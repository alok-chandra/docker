# docker

## 1. Docker Compose
docker related files configuration and links

Link:
https://www.youtube.com/watch?v=exmSJpJvIPs&t=1867s


server.js:
--- logic added to fetch the data from 
-- table : cruDB
--  collection: users
------- using mongoose and express REST

Starting server: node server.js

## 2. Dockerfile

-- create a new file as Dockerfile and add instructions to build the application

-- #### Build docker image
    docker build -t mongoapp:1.0 .

