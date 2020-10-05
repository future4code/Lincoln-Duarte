const container = document.getElementById('container');
// container.innerHTML += '<p class="texto-azul">Texto 0</p>';
// container.innerHTML += '<p class="texto-azul">Texto 1</p>';
// container.innerHTML += '<p class="texto-azul">Texto 2</p>';
// container.innerHTML += '<p class="texto-azul">Texto 3</p>';
// container.innerHTML += '<p class="texto-azul">Texto 4</p>';


for(let i = 0; i < 5; i++) {
  container.innerHTML += `<p class="texto-azul">Texto ${i}</p>`
}

