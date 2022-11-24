// toggle Menu
const hamburger = document.querySelector('.toolbar');
const cancel = document.querySelector('.delete');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu-items');

const activeToggle = () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
};

hamburger.addEventListener('click', activeToggle);

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', activeToggle));

cancel.addEventListener('click', activeToggle);
