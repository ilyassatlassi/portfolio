// toggle Menu
const hamburger = document.querySelector('.toolbar');
const cancel = document.querySelector('.delete');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu-items');
const project = document.querySelector('.project');
const detail = document.querySelector('.detail');
const image = document.querySelector('.image-pop');
const title = document.querySelector('.title-pop');
const live = document.getElementById('live');
const source = document.getElementById('source');
const body = document.querySelector('.body');

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
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './images/first_pro.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://ilyassatlassi.github.io/portfolio/',
    linkToSource: 'https://github.com/ilyassatlassi/portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './images/Snapshoot Portfolio (2).png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://ilyassatlassi.github.io/portfolio/',
    linkToSource: 'https://github.com/ilyassatlassi/portfolio',
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://ilyassatlassi.github.io/portfolio/',
    linkToSource: 'https://github.com/ilyassatlassi/portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './images/Snapshoot Portfolio 3.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://ilyassatlassi.github.io/portfolio/',
    linkToSourhttps: 'https://github.com/ilyassatlassi/portfolio',
  },
];

// eslint-disable-next-line no-return-assign
arrays.map((array, index) => project.innerHTML += `
<div class="project-card rev-${index}">
<div class="project-image">
  <img src="${array.image}" alt="project background image" />
</div>
<div class="project-details">
  <div class="project-title">
    <h3 id="title">${array.name}</h3>
  </div>
  <div class="project-info">
    <div class="name">
      <p>canopy</p>
    </div>
    <img class="dot" src="images/dot.png" alt="dot" />
    <div class="domaine">
      <p>Back End Dev</p>
    </div>
    <img class="dot" src="images/dot.png" alt="dot" />
    <div class="year">
      <p>2015</p>
    </div>
  </div>
  <div class="description">
    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required.
    </p>
  </div>
  <ul class="tools">
  ${array.technologies.map((lang) => `<li id="lang">${lang}</li>`).join('')}
  </ul>
  <div class="btn-project">
    <a href="javascript:moreDetails(${index})" class="btn">See Project</a>
</div>
</div>
</div>
`);

const moreDetails = (index) => {
  title.innerHTML = arrays[index].name;
  image.src = arrays[index].image;
  live.href = arrays[index].linkToLiveVersion;
  source.href = arrays[index].linkToSourhttps;
  detail.style.display = 'block';
  body.style.overflow = 'hidden';
};

const closeDetails = () => {
  detail.style.display = 'none';
  body.style.overflow = 'auto';
};

moreDetails();
closeDetails();
