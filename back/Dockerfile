FROM php:8.3-fpm-alpine

# Instalar dependencias de Alpine (git, curl, mysql-client, NGINX, etc.)
RUN apk add --no-cache git curl mysql-client nginx \
    && docker-php-ext-install pdo_mysql

# Copiar el archivo php.ini
COPY ./php.ini /usr/local/etc/php/conf.d/custom.ini

# Copiar configuración de Nginx (Ahora que Nginx está instalado)
# Asegúrate de que este directorio exista antes de copiar archivos en él
RUN mkdir -p /etc/nginx/conf.d
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx-master.conf /etc/nginx/nginx.conf

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copiar todo el código de la aplicación (incluyendo composer.json y .env.example)
COPY . .

# Exponer el puerto de PHP-FPM
EXPOSE 9000