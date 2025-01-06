window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const contenedor = document.getElementById("contenedor");
  const url = "https://rickandmortyapi.com/api/character/";

  async function cargarPersonajes() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener personajes");
      const data = await response.json();
      const personajes = data.results;
      personajes.forEach((e) => {
        divPersonaje = document.createElement("div");
        imgPersonaje = document.createElement("img");
        divInfo = document.createElement("Div");

        imgPersonaje.src = e.image;
        divPersonaje.appendChild(imgPersonaje);
        divInfo.innerHTML = `<p><b>ID: </b>${e.id}</p><p><b>Nombre: </b>${e.name}</p><p><b>Estado: </b>${e.status}</p><p><b>Especie: </b>${e.species}</p><p><b>Episodios: </b>${e.episode.length}</p>`;
        divPersonaje.appendChild(divInfo);
        contenedor.appendChild(divPersonaje);
      });
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    }
  }
  btn.addEventListener("click", cargarPersonajes);
});
