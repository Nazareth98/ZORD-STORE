const body = document.querySelector("#body");
const posicao = body.getBoundingClientRect();
const nav = document.querySelector('#nav')
const cardsBg = document.querySelector('#cards-bg')
const home = document.querySelector('#home-bg')
let rect = cardsBg.getBoundingClientRect()

const isOnScreen = () => {
      let rect = home.getBoundingClientRect()
      return rect.top > -300 ;
}

function animaNavBar() { 
  if (!isOnScreen()) {
    nav.classList.add("nav-scroll")
  } else {
    nav.classList.remove("nav-scroll")
  }
}

window.addEventListener('scroll', animaNavBar)

