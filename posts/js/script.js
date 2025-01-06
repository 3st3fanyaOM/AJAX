window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const resultado = document.getElementById("resultado");
  const url = "https://jsonplaceholder.typicode.com/posts";

  btn.addEventListener("click", () => {
    fetch(url)
      .then((response) => response.json())
      .then((post) => {
        console.log(typeof post);
        console.log(post);
        resultado.innerHTML = "";
        tabla = document.createElement("table");
        tabla.setAttribute("class", "table table-striped");
        //cabecera
        thead = document.createElement("thead");
        thTitle = document.createElement("th");
        thTitle.textContent = "Title";
        thead.appendChild(thTitle);
        thBody = document.createElement("th");
        thBody.textContent = "Body";
        thead.appendChild(thBody);
        tabla.appendChild(thead);
        //cuerpo
        post.forEach((e) => {
          function addRow() {
            fila = tabla.insertRow(0);
            contTitulo = fila.insertCell(0);
            contTitulo.textContent = e.title;
            celdaBody = fila.insertCell(1);
            celdaBody.textContent = e.body;
          }
          addRow(tabla);
        });
        resultado.appendChild(tabla);
      });
  });
});
