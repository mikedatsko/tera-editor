FROM m1sh2/nodejs-ubuntu:latest

WORKDIR /app

COPY package.json .
COPY angular.json .
COPY tsconfig.app.json .
COPY tsconfig.spec.json .
COPY tsconfig.json .
COPY tslint.json .

RUN npm install
