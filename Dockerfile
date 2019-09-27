# initial base image
FROM node:alpine as builder

WORKDIR '/app'

COPY  package.json ./

RUN  npm install

COPY . .

RUN npm run build

# no initial base image
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html


