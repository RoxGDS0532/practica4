# Etapa de build
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción con NGINX
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html/practica4
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN ls -l /etc/nginx/conf.d/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
