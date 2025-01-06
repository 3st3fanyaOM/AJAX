window.addEventListener("DOMContentLoaded", () => {
  const divResultado = document.getElementById("resultado");
  const url = "https://pokeapi.co/api/v2/pokemon/";

  window.document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    const pokeID = document.getElementById("idPokemon").value;
    if(!pokeID){
        alert("debes introducir un número");
        return;
    }
    fetch(url + pokeID)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        divResultado.innerHTML = "";
        divResultado.innerHTML = `<h2>${data.name}</h2><p><b>Hablilidades</b></p>`;
        lista = document.createElement("ul");
        divResultado.appendChild(lista);
        habilidades = data.abilities;
        habilidades.forEach((e) => {
          const li = document.createElement("li");
          li.textContent = e.ability.name;
          lista.appendChild(li);
        });
      })
      .catch((error) => console.error("Error: ", error));
  });
});
