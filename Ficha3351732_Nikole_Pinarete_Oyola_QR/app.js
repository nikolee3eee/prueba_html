// Aprendiz: Nikole Piñarete Oyola | Ficha: 3351732 | app.js
const URL_PAGINA = "https://nikolee3eee.github.io/prueba_html/";  // Guarda el enlace de tu página en GitHub Pages. Escríbelo con TU enlace real: cambia TU-USUARIO por tu usuario de GitHub y TU-REPOSITORIO por el nombre de tu repositorio. Es el texto que el QR contiene.
const contenedor = document.getElementById("qrcode");  // Busca el div vacío donde se dibujará el QR.
new QRCode(contenedor, {  // Crea el QR dentro del contenedor. QRCode viene de la librería que cargaste en el HTML.
  text: URL_PAGINA,  // El contenido del QR: tu enlace.
  width: 180,  // Ancho del QR en píxeles.
  height: 180,  // Alto del QR en píxeles.
  colorDark: "#000000",  // Color de los módulos del QR: negro para máximo contraste.
  colorLight: "#ffffff",  // Color del fondo del QR: blanco.
  correctLevel: QRCode.CorrectLevel.H  // Nivel de corrección de errores H (alto): el QR se lee aunque esté algo sucio o dañado.
});  // Cierra la configuración del QR.
const enlace = document.getElementById("enlace");  // Referencia al párrafo del enlace.
enlace.textContent = URL_PAGINA;  // Muestra el enlace en texto, debajo del QR.
document.getElementById("copiarBtn").addEventListener("click", () => {  // Escucha el clic del botón Copiar enlace.
  const aviso = document.getElementById("aviso");  // Referencia al párrafo de avisos.
  aviso.textContent = "Enlace copiado";  // Muestra la confirmación.
  aviso.className = "exito";  // Aplica el estilo verde de éxito.
  navigator.clipboard.writeText(URL_PAGINA);  // Copia el enlace al portapapeles del dispositivo.
});  // Cierra la función del evento. Tu página está terminada.