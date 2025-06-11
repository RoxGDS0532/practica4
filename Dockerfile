# Imagen Node dependiendo de versión instalada
FROM node:24
# Establece el directorio de trabajo
WORKDIR /app
# Copia los archivos del proyecto
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Expone el puerto de React
EXPOSE 4200
# Ejecuta la aplicación en desarrollo
CMD ["npm", "start"]