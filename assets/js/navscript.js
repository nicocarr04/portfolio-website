var toggleNavButton = document.getElementsByClassName('toggle-navbutton')[0];
var navbarLinks = document.getElementsByClassName('navbar-links')[0];

var audio = new Audio('./assets/music/instrumental.mp3');

console.log(toggleNavButton)

window.addEventListener('load', (event) => {
    audio.volume = 0.5;
    audio.play();
  });

toggleNavButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})