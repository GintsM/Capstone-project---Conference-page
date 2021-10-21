const navMenu = document.querySelector('body > header > nav');
const hidenUl = document.querySelector('ul.links');
const hamburger = document.querySelector('.show > span:nth-child(1)');
const closeElemetn = document.querySelector('.closeScreen');
const menuLinks = document.querySelectorAll('body > header > nav > ul > li');

function showMenu() {
  navMenu.classList.toggle('open');
  hidenUl.classList.toggle('open');
  hamburger.classList.toggle('hide');
  closeElemetn.classList.toggle('showClose');
}

hamburger.addEventListener('click', showMenu);
closeElemetn.addEventListener('click', showMenu);
menuLinks.forEach((li) => li.addEventListener('click', () => {
  if(closeElemetn.classList.contains('showClose')) {
    showMenu();
  }
}));