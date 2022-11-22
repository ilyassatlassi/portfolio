// toggle Menu
const hamburger = document.querySelector('.toolbar');
const cancel = document.querySelector('.delete');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu-items');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
});

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
}));

cancel.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
});
