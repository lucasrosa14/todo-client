FROM node:slim AS builder

COPY package*.json ./

RUN npm install

FROM node:slim

WORKDIR /app/

COPY --chown=node:node . .
COPY --chown=node:node --from=builder node_modules node_modules

RUN mkdir .angular && \
    chown node:node .angular && \
    chmod 777 .angular
    
RUN npm i -D -E -g @angular/cli && \
    npm i -g --save-dev @angular-devkit/build-angular

EXPOSE 4200

USER node

ENTRYPOINT [ "sh", "/app/docker/entrypoint.sh" ]