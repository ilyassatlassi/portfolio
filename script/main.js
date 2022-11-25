// toggle Menu
const hamburger = document.querySelector('.toolbar');
const cancel = document.querySelector('.delete');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu-items');
const button = document.querySelector('.btn-project');
const main = document.querySelector('.project');

console.log(button)
const activeToggle = () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
};

hamburger.addEventListener('click', activeToggle);

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', activeToggle));

cancel.addEventListener('click', activeToggle);

// popup

const arrays = [
  {
    id: 0,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './images/first_pro.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://ilyassatlassi.github.io/portfolio/',
    linkToSource: 'https://github.com/ilyassatlassi/portfolio',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './images/Snapshoot Portfolio (2).png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://ilyassatlassi.github.io/portfolio/',
    linkToSource: 'https://github.com/ilyassatlassi/portfolio',
  },
  {
    id: 2,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://ilyassatlassi.github.io/portfolio/',
    linkToSource: 'https://github.com/ilyassatlassi/portfolio',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './images/Snapshoot Portfolio 3.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://ilyassatlassi.github.io/portfolio/',
    linkToSourhttps: 'https://github.com/ilyassatlassi/portfolio',
  },
];

const detail = document.createElement('div');
detail.className = 'detail';
const pop_body = document.createElement('div');
pop_body.className = 'pop_body';

button.addEventListener('click', ()=> {
  detail.appendChild(pop_body)
  main.appendChild(detail)
})

arrays.map((array, index) => pop_body.innerHTML = `<div class="card  rev-${index}">
  <div class="project-title">
        <h3 id="title">${array.name}</h3>
      </div>`)

