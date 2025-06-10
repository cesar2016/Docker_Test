# 🚀 CRUD con Docker Compose: React, Laravel, MySQL, Nginx & PhpMyAdmin

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">
  <img src="https://miro.medium.com/v2/resize:fit:1280/0*PkYj6tc-SQUMi6uh.gif" alt="LAMPP" width="200" style="margin: 5px;">
  <img src="https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png" alt="Node.js" width="200" style="margin: 5px;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhfAMgG_6ps9Hs_2NjmJ5pgskwlhFAQyv7g&s" alt="React" width="200" style="margin: 5px;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJl4fp0SkQbTPU5ZxVl6AKWYuKCwM0gIhNtQ&s" alt="Laravel" width="200" style="margin: 5px;">
</div>

Bienvenido a este proyecto, cuyo objetivo principal no es la complejidad del código, sino la **demostración de la facilidad y potencia de la tecnología de contenedores con Docker**.

Este repositorio te permitirá levantar un entorno de desarrollo completo y funcional con una aplicación CRUD (Crear, Leer, Actualizar, Borrar) en pocos pasos, sin preocuparte por la instalación de dependencias o conflictos de versiones en tu máquina local.

---

## ✨ Tecnologías Implementadas

Este proyecto integra las siguientes tecnologías, cada una corriendo en su propio contenedor aislado y optimizado:

| Componente     | Tecnología          | Descripción                                        |
| :------------- | :------------------ | :------------------------------------------------- |
| **Frontend** | `React`             | Interfaz de usuario dinámica y responsiva.         |
| **Backend** | `Laravel (API)`     | Framework PHP para la lógica de negocio y la API.  |
| **Base de Datos** | `MySQL`             | Sistema de gestión de bases de datos relacional.  |
| **Gestor DB** | `PhpMyAdmin`        | Interfaz web para la administración de MySQL.      |
| **Servidor Web** | `NGINX`             | Servidor web y proxy inverso para el backend.      |
| **Contenedores**| `Docker Compose`    | Orquestación y gestión de los servicios del entorno. |

---

## 🎯 Objetivo del Proyecto

La meta fundamental de este proyecto es ilustrar cómo Docker facilita el despliegue de entornos complejos. Con solo un par de comandos, cualquier usuario puede clonar este repositorio y tener un ecosistema de desarrollo completo (Frontend, Backend, Base de Datos y herramientas de gestión) operando y comunicándose entre sí de forma fluida, sin las típicas complicaciones de configuración.

---

## 🚀 Cómo Poner en Marcha el Entorno

Sigue estos sencillos pasos para levantar todos los servicios en contenedores:

1.  **Clonar el Repositorio:**
    ```bash
    git clone git@github.com:cesar2016/Docker_Test.git
    cd Docker_Test
    ```

2.  **Preparar el Archivo de Entorno de Laravel:**
    Laravel necesita un archivo `.env` para su configuración.
    ```bash
    cp back/.env_copy back/.env && rm back/.env_copy
    ```
    Este comando copia el archivo de ejemplo y lo renombra a `.env`.

3.  **Levantar los Contenedores:**
    Desde la raíz del proyecto, ejecuta el siguiente comando. `docker compose` se encargará de construir las imágenes (si es necesario) y levantar todos los servicios definidos:
    ```bash
    sudo docker compose up -d
    ```
    * **`-d`**: Ejecuta los contenedores en segundo plano (detached mode).

    **¡Espera un momento!** La primera vez que ejecutes este comando, Docker descargará las imágenes base y construirá las imágenes personalizadas. Esto puede tardar unos minutos. Los servicios se configurarán, instalarán dependencias (Composer en Laravel, NPM en React), generarán la clave de Laravel y ejecutarán las migraciones de la base de datos automáticamente.

---

## 🌐 Acceso a la Aplicación y Herramientas

Una vez que los contenedores estén operativos, podrás acceder a los diferentes componentes del proyecto desde tu navegador:

* **Frontend (React):**
    [http://localhost:3002/](http://localhost:3002/)

* **Backend (Laravel API):**
    [http://localhost:9200/](http://localhost:9200/)

* **PhpMyAdmin (Gestor de Base de Datos):**
    [http://localhost:9500/](http://localhost:9500/)
    * **Usuario:** `test_dkr_db`
    * **Contraseña:** `test_dkr_db1234`

---

## AUTOR
- cesars.pro@gmail.com
- Linkedin: https://www.linkedin.com/in/cesar-sanchez-dev/

