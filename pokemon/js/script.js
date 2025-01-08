window.addEventListener("DOMContentLoaded", () => {
  const divResultado = document.getElementById("resultado");
  const url = "https://pokeapi.co/api/v2/pokemon/";

  window.document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    //recoger value dentro
    const pokeID = document.getElementById("idPokemon").value;
    if (!pokeID) { //comprobacion input
      alert("debes introducir un número");
      return;
    }
    fetch(url + pokeID)//añadir id a url
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        divResultado.innerHTML = "";//vaciar div
        imagen = document.createElement("img");//img
        imagen.src = data.sprites.other.showdown.front_default;
        divResultado.innerHTML = `<h2>${data.name}</h2>`;//name
        divResultado.appendChild(imagen);
        divResultado.innerHTML += `<p><b>Hablilidades</b></p>`;//lista
        lista = document.createElement("ul");
        divResultado.appendChild(lista);//unir lista a div
        habilidades = data.abilities;
        habilidades.forEach((e) => {//recorrer array
          const li = document.createElement("li");
          li.textContent = e.ability.name;
          lista.appendChild(li);//unir elmt a lista
        });
      })
      .catch((error) => console.error("Error: ", error));
  });
});
