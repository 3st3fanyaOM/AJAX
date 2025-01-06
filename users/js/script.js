window.addEventListener("DOMContentLoaded", () => {
  const resultado = document.getElementById("resultado");
  const url = "https://jsonplaceholder.typicode.com/users/5";
  var user;

  async function cargarUsuario() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener usuario");
      user = await response.json();
      console.log(user);

      const nombre = user.name;
      const usuario = user.username;
      const mail = user.email;
      resultado.innerHTML = `<h1>${nombre}</h1><p>${usuario}</p><p>${mail}</p>`;
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    }
  }

  cargarUsuario();
});
