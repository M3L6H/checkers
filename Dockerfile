FROM node:12.20-alpine AS node

FROM node as build
EXPOSE 8080
WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM node as run
ARG NODE_ENV="production"
ARG SERVER_PORT="8080"

ENV NODE_ENV=${NODE_ENV}
ENV SERVER_PORT=${SERVER_PORT}

EXPOSE 8080
WORKDIR /app
RUN chown -R node:node /app

COPY package*.json .
RUN npm ci --only=production

COPY --from=build /app/dist .

USER node

CMD ["node", "/app/server.js"]
