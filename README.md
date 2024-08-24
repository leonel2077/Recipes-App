# Aplicación de Recetas

## Autores
- Mariano Leonel Ison
- Mateo roble

## Descripción
Este proyecto es una aplicación simple de gestión de recetas construida con React y Material UI. La aplicación permite a los usuarios crear, ver y eliminar recetas.

## Características

- **Agregar Recetas:** Los usuarios pueden agregar nuevas recetas a través de un formulario.
- **Ver Recetas:** Los usuarios pueden ver todas las recetas en un formato de lista.
- **Eliminar Recetas:** Los usuarios pueden eliminar recetas de la lista.
- **Persistencia de Datos:** Todos los datos de las recetas se almacenan en `localStorage`, asegurando que las recetas permanezcan disponibles incluso después de refrescar la página.
- **Interfaz Elegante:** La interfaz de usuario está construida utilizando Material UI, ofreciendo un diseño limpio y moderno.
- **Diseño Responsivo:** La aplicación está diseñada para ser responsiva y se ve bien en diferentes tamaños de pantalla.

## Pasos de instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/leonel2077/recipes-app.git
2. Navega al directorio del proyecto:
   ```bash
   cd recipes-app
3. Instala las dependencias:
   ```bash
   npm install
4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   
La aplicación deberia estar corriendo en `http://localhost:3000`-

## Uso

### Agregar una Receta

1. Navega a la página "Crear Receta" utilizando el enlace en la barra de navegación.
2. Completa el formulario ingresando el nombre de la receta y la descripción (que puede incluir ingredientes, pasos de preparación, etc.).
3. Haz clic en el botón "Crear Receta". Serás redirigido a la página de "Ver Recetas", donde podrás ver tu nueva receta en la lista.

### Ver Recetas

1. Navega a la página "Ver Recetas" utilizando el enlace en la barra de navegación.
2. En esta página, verás una lista de todas las recetas creadas. Cada receta se muestra en una tarjeta que incluye el nombre y la descripción.
3. Si la descripción es extensa, puedes desplazarte dentro de la tarjeta para leerla completamente.

### Eliminar una Receta

1. En la página "Ver Recetas", localiza la receta que deseas eliminar.
2. Haz clic en el icono de "X" en la esquina superior derecha de la tarjeta de la receta.
3. La receta será eliminada de la lista y del almacenamiento local. Esta acción no se puede deshacer.

## Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Material UI:** Un popular framework de UI para React que proporciona un conjunto de componentes personalizables.
- **React Context:** Usado para manejar el estado global en la aplicación.
- **localStorage:** API web utilizada para persistir datos en el lado del cliente.
