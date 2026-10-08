# Around The U.S. — React

Versión en React y TypeScript del proyecto "Around The U.S.", una galería de tarjetas de lugares con perfil de usuario editable.

## Funcionalidades

- Galería de tarjetas con imagen, nombre y botón de "me gusta".
- Ventanas emergentes para editar el perfil, cambiar la foto y agregar un lugar.
- Imagen ampliada al hacer clic en una tarjeta.

## Tecnologías

- **React** — componentes, props, `children` y estado con `useState`.
- **TypeScript** — tipado de props y datos.
- **Vite** — entorno de desarrollo.
- **HTML5 y CSS3** — maquetación adaptativa con metodología BEM.

## Componentes

`Header` · `Main` · `Footer` · `Popup` (reutilizable) · `Card` · `NewCard` · `EditProfile` · `EditAvatar` · `ImagePopup`

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Se abre en `http://localhost:3000`.

## Estado

Los datos de las tarjetas son ficticios. La conexión con la API se agrega en un sprint posterior.