const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  //eliminar  todos los elementos <li>
  //de la lista <ul class=”lista”>
  //(sin eliminar la lista <ul>).

  const listaEls = document.querySelector(".lista");
  const element = document.querySelectorAll(".lista li");

  for (const el of element) {
    el.remove();
  }
  

  // Crear nuevos elementos <li>
  // basados en el array cosasQueAprendimos[]
  // que está en el index.js.
  // Por cada elemento del array
  // crear un elemento <li>
  // con la clase indicada en cada elemento.

  for (const item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    newLiEl.classList.add(item.class || "item");
    listaEls.appendChild(newLiEl);
    console.log(listaEls);
  }
}

main();
