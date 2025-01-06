window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const divRespuesta = document.getElementById("respuesta");
  const url = "https://yesno.wtf/api";

  btn.addEventListener("click", obtenerRespuesta);

  async function obtenerRespuesta() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener la respuesta");
      respuesta = await response.json();
      console.log(respuesta);
      divRespuesta.textContent = respuesta.answer;
      // mostrar ventana con imagen
      function mostrarImg() {
        let nuevaVentana = window.open(
          "respuestaImg.html",
          "segundaPag",
          "height=500, width=500, top=300, left=300"
        );

        //añadir imagen en ventana emergente
        if (nuevaVentana) {
          nuevaVentana.document.write(`
            <html>
              <head>
                <title>Imagen de Respuesta</title>
              </head>
              <body>
                <div>
                  <h1>${respuesta.answer}</h1>
                  <img src="${respuesta.image}" alt="Respuesta">
                </div>
              </body>
            </html>
          `);
          nuevaVentana.document.close();
        } else {
          console.error("No se pudo abrir la nueva ventana");
        }
      }
      mostrarImg();
    } catch (error) {
      console.error("Error en la petición", error);
    }
  }
});
