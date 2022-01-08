FROM node:16.13.1-alpine

RUN apk add --update npm
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "run", "serve" ]