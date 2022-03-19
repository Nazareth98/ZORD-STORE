const body = document.querySelector("#body");
const posicao = body.getBoundingClientRect();
const nav = document.querySelector("#nav");

body.addEventListener("click", (event) => {
  console.log(event.pageY);
  posicaoNav(event.pageY);
});

function posicaoNav(posicaoY) {
  if (posicaoY <= 800) {
    nav.classList.add("nav-scroll");
  }
}
console.log(nav);
