# Используем базовый образ Node.js версии 20 для сборки
FROM node:20 AS build

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы и собираем проект
COPY . .
RUN npm run build

# Используем базовый образ Nginx для сервера
FROM nginx:alpine

# Копируем собранные файлы в директорию Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
