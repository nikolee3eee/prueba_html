# Proyecto QR - Nikole Piñarete Oyola (Ficha 3351732)

Archivos: index.html, estilos.css y app.js. Deben quedar juntos en la misma carpeta.

## Publicar desde la web de GitHub (sin comandos)

1. Descomprime este ZIP. No subas el ZIP: sube los archivos.
2. Entra a https://github.com con tu cuenta, pulsa New y crea un repositorio PUBLICO con el nombre que quieras (sin espacios).
3. En el repositorio pulsa "uploading an existing file" y arrastra index.html, estilos.css y app.js. Pulsa Commit changes.
4. Ve a Settings > Pages. En Source elige "Deploy from a branch", rama main, carpeta /(root) y pulsa Save.
5. Espera 1 o 2 minutos y abre tu enlace de GitHub Pages (el mismo que escribiste en app.js).
6. En la pagina veras el QR. Escanealo con la camara de tu celular: se abrira la misma pagina.

## Publicar con comandos

Crea el repositorio vacio en GitHub y ejecuta en la carpeta los comandos de publicar.txt. Luego haz el paso 4 y 5.

## Si algo falla

- Error 404: espera unos minutos y confirma que Pages esta activado y que el repositorio es publico.
- Pagina sin estilos o sin QR: revisa que los tres archivos esten en la raiz del repositorio y con el nombre exacto, en minusculas.
- El QR abre otra direccion o da error 404: el enlace escrito en app.js (URL_PAGINA) debe ser exactamente el de tu GitHub Pages: https://tu-usuario.github.io/tu-repositorio/. Corrigelo en app.js, sube el archivo de nuevo y espera un minuto.