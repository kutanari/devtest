FROM node:20.10.0-alpine3.17
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENTRYPOINT npm run preview --host