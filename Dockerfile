# build stage
# FROM node:lts-alpine as build-stage
FROM node:lts-alpine
RUN ls
WORKDIR /app
COPY package*.json ./
# COPY default.conf ./
RUN npm install
COPY . .
RUN ls
RUN npm run build

# production stage
# FROM nginx:1.13.12-alpine as production-stage
# COPY --from=build-stage /app/dist/myapp /usr/share/nginx/html
# COPY --from=build-stage /app/default.conf /etc/nginx/conf.d
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
