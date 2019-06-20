# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY default.conf ./
RUN yarn install
COPY . .
RUN yarn build

# production stage
# FROM nginx:1.13.12-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# COPY --from=build-stage /app/default.conf /etc/nginx/conf.d
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
