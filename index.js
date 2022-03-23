const body = document.querySelector("#body");
const posicao = body.getBoundingClientRect();
const nav = document.querySelector('#nav')
const cardsBg = document.querySelector('#cards-bg')

const isOnScreen = () => {
      let rect = cardsBg.getBoundingClientRect()
      return rect.top > 0 && rect.bottom  * 0.7 < window.innerHeight;
}

function animaNavBar() { 
  if (isOnScreen()) {
    nav.classList.add("nav-scroll")
  }
}
//const animar = animaNavBar(cardsBg)

window.addEventListener('scroll', animaNavBar)
