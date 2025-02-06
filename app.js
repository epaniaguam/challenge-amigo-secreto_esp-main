// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// listaNombres = ["Pedro", "Juan", "Diego"];
listaNombres = [];

function agregarAmigo() {
  // Código que se ejecutará al hacer click en el botón

  let nombreNuevo = document.getElementById("amigo").value;

  if (nombreNuevo.trim() === "") {
    return;
  }

  if (!listaNombres.includes(nombreNuevo)) {
    listaNombres.push(nombreNuevo);
  }

  const listaAmigos = document.getElementById("listaAmigos");

  listaNombres.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  let amigoSorteado =
    listaNombres[Math.floor(Math.random() * listaNombres.length)];

  const resultado = document.getElementById("resultado");

  resultado.textContent = amigoSorteado;
}
