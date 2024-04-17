FROM node:20.11.0-alpine3.19

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "yarn", "start" ]