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
  if (closeElemetn.classList.contains('showClose')) {
    showMenu();
  }
}));

// Featured Speakers
const speakers = [
  {
    name: 'Gints Misins',
    occup: 'SIA Pamati majai, consultant, created own matrix, freelancer',
    img: 'images/portr1.png',
    description: 'The mechanical and durability properties of UHPC make it an ideal candidate for use in developing new solutions to pressing concerns about highway infrastructure deterioration, repair, and replacement',
  },
  {
    name: 'Migins Simnts',
    occup: 'New York State department of transportation (DOT)',
    img: 'images/portr2.png',
    description: 'UHPC is a cementitious composite material composed of an optimized gradation of granular constituents The mechanical and durability properties of UHPC make it an ideal candidate for use.',
  },
  {
    name: 'Sandra Forshina',
    occup: 'Senior Finansial Analyst  SIA Pamati majai',
    img: 'images/forshina.png',
    description: 'UHPC is a cementitious composite material composed of an optimized gradation of granular constituents, a water-to-cementitious . Infrastructure deterioration, repair, and replacement',
  },
  {
    name: 'Sindija Sauliete',
    occup: 'Global market manager, UHPC research',
    img: 'images/f2.png',
    description: 'UHPC is being considered for use in a wide variety of highway infrastructure applications. The high compressive and tensile strengths',
  },
  {
    name: 'Elizabhete Sofia Kaimina',
    occup: 'Student Jelagava technology college',
    img: 'images/meita.png',
    description: 'high performance concretes have demonstrated exceptional performance when used as a field-cast closure pour or grout material',
  },
  {
    name: 'Aku Aakbarkhans',
    occup: 'SIA Pamati majai, hi Aku just hired you, freelancer',
    img: 'images/Aku.png',
    description: 'The mechanical and durability properties of UHPC make it an ideal candidate for use in developing new solutions to pressing concerns about highway infrastructure deterioration, repair, and replacement',
  }];

const startPoint = document.querySelector('.dynamic');
const programTitle = document.createElement('h4');
programTitle.classList.add('programtitle');
programTitle.classList.add('speakers');
programTitle.innerHTML = 'Featured Speakers';
const underLine = document.createElement('span');
underLine.classList.add('underline');
const speakContainer = document.createElement('div');
speakContainer.classList.add('speakConteiner');
startPoint.appendChild(programTitle);
startPoint.appendChild(underLine);
startPoint.appendChild(speakContainer);

for (let i = 0; i < speakers.length; i += 1) {
  const indvidCont = document.createElement('div');
  indvidCont.classList.add('indvidcont');
  speakContainer.appendChild(indvidCont);
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imgparticipant');
  indvidCont.appendChild(imageContainer);
  const image = document.createElement('img');
  image.setAttribute('src', speakers[i].img);
  image.setAttribute('alt', 'Speaker Portret');
  imageContainer.appendChild(image);
  const participant = document.createElement('div');
  participant.classList.add('participant');
  indvidCont.appendChild(participant);
  const nameParticiant = document.createElement('h4');
  nameParticiant.innerHTML = speakers[i].name;
  nameParticiant.classList.add('partName');
  const position = document.createElement('p');
  position.classList.add('position');
  const italic = document.createElement('i');
  italic.innerHTML = speakers[i].occup;
  position.appendChild(italic);
  const splitLine = document.createElement('hr');
  const description = document.createElement('p');
  description.innerHTML = speakers[i].description;
  description.classList.add('position');
  participant.appendChild(nameParticiant);
  participant.appendChild(position);
  participant.appendChild(splitLine);
  participant.appendChild(description);
}