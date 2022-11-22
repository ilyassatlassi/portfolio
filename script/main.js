const hamburger = document.querySector('.toolbar');
const cancel = document.querySelector('.delete');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu-items');

humburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
});

document.querySelectorA
il('.links').forEach((n) =>
n.addEventListener('click',() => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
  }));
  
 cancel.addEventListener('click', () => {
   menu.classList.toggle('active');
   links.classList.toggle('active');
   cancel.classList.toggle('active');
  });
  
