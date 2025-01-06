window.addEventListener("DOMContentLoaded", () => {
  const resultado = document.getElementById("resultado");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5");
  xhr.send();

  xhr.addEventListener("readystatechange", (e) => {
    e.preventDefault();

    if (xhr.readyState !== 4) return;

    if (xhr.status <= 200 && xhr.status < 300) {
      console.log("OK");
      let usr = JSON.parse(xhr.responseText);
      console.log(usr);

      resultado.innerHTML = `<h1>${usr.name}</h1><p>${usr.username}</p><p>${usr.email}</p>`;
    } else {
      console.error("Error");
      resultado.innerHTML = "Error al cargar usuario";
    }
  });
});
