# ¿ Cómo utilizar el proyecto?

## Poner variables de entorno

En el .env.template está el template de las variables que son necesarias en el archivo .env para que el proyecto funcione correctamente.

## Instalación y funcionamiento

* Instalar dependencias con:

```
npm i
```
* Correr en entorno de desarrollo con:

```
npm run dev
```

* Se utilizan servicios externos como:
* - Firebase Authentication para la autenticación del usuario.
* - TMDB Api para el consumo del contendio multimedia.


## Sugerencias
* Se usa la extensión Better Comments con el objetivo de notar de mejor forma los comentarios en todos los partes de la aplicación.

## Descripción del proyecto
El proyecto consta de 4 partes principales Login, Home, Categories y Movie.

* Login (Componente LoginPage): ruta principal para autenticar los usaurios usando Firebase Authentication.

* Home (Componente HomePage): ruta base a la que se accede estando autenticado y permite tener a la disposición el contenido y la navegación.

* Categories (Componente ContentCategory): ruta que nos permite visualizar las películas de la categoría seleccionada en el home.

* Movie (Componente MoviePage): ruta que contiene el contenido multimedia y la información de la película seleccionada en Categories.

Para ingresar al Home es necesario ingresar un Correo y una Contraseña.
En el Home se visualiza:
* Una barra de navegación con algunos enlaces.
* Un logo flotante al aldo derecho, el cual es una barra para configuraciones y usuarios.
* Un Slider o Carrousel mostrando algunas películas.
* Una sección donde hay unas Tarjetas con cada una de las 5 Categorías.
* Un Slider o Carrousel con películas recomendadas.

Al dar click en alguna de las tarjetas de Categorías se redirige a la ruta con la categoría seleccionada, en esta ruta hay un componente que muestra en filas las películas correspondientes.

Al dar click en el botón "Ver" de alguna de las tarjetas de las películas, se redirige a una pagína con el contenido multimedia y demás información correspondiente a la película.

Desde el botón flotante se puede Cerrar Sesión.

## Construcción del proyecto

Se compone de una aplicación React con Redux, Axios, librerías para componentes como React Slick y SweetAlert.

Usa el servicio de Firebase Authentication para la autenticación de usuarios.

La Api TMDB para el consumo del contenido multimedia de las películas.

El diseño del proyecto se hace tomando como inspiración la app Disney plus.