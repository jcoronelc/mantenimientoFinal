# Pasos para ejecutar la aplicación

## Ejecutar el backend

1. **Clonar o descargar el repositorio del proyecto:**
   
   Clona el repositorio del proyecto desde su URL o descárgalo como archivo ZIP y descomprímelo.
   
2. **Abrir el proyecto en Visual Studio Code:**

   Abre Visual Studio Code y carga el directorio del proyecto.

3. **Abrir una terminal:**

   Abre una terminal dentro de Visual Studio Code utilizando el atajo `Ctrl+J`.
   
4. **Navegar al directorio del proyecto:**

   Cambia al directorio donde se encuentra el código del servidor.

   ```bash
   cd goTogetherServer-ServerProfile

5. **Instalar virtualenv:**

   Asegúrate de tener instalado `virtualenv`, una herramienta para crear entornos virtuales en Python.

   ```bash
   pip install virtualenv

6. **Crear un entorno virtual:**

   Crea un entorno virtual con un nombre personalizado, en este caso `venv1`.

   ```bash
   python -m venv venv1

7. **Activar el entorno virtual:**

   Activa el entorno virtual para aislar las dependencias del proyecto. El comando puede variar según el sistema operativo:

   - **En Windows:**

     ```bash
     .\venv1\Scripts\activate
     ```

   - **En macOS/Linux:**

     ```bash
     source venv1/bin/activate
     ```

8. **Instalar Django y otras dependencias:**

   Instala Django y otras librerías necesarias como `djangorestframework` y `django-cors-headers`.

   ```bash
   pip install django
   pip install djangorestframework
   pip install django-cors-headers

9. **Aplicar las migraciones:**

   Ejecuta las migraciones para configurar la base de datos según los modelos definidos en el proyecto.

   ```bash
   python manage.py migrate
   
10. **Ejecutar el servidor de desarrollo:**

    Inicia el servidor de desarrollo de Django para poner en marcha la aplicación.

    ```bash
    python manage.py runserver
    ```
## Ejecutar el front end
1. **Navegar al directorio del proyecto:**

   Cambia al directorio donde se encuentra el código del front end.

   ```bash
   cd goTogetherApp-ServerTrip

2. **Instala las dependencias:**

   Instala todas las dependencias del proyecto con el siguiente comando:

   ```bash
   npm install 'react-scripts'

3. **Ejecuta la aplicación:**

   Ejecuta el front end con el siguiente comando:

   ```bash
   npm start

