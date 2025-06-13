FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV PORT=4200
EXPOSE 4200


FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html/practica4


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
