# Etapa 1: Construcción
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV PORT=4200
EXPOSE 4200


# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Opcional: configuración personalizada
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
