// toggle Menu
const hamburger = document.querySelector('.toolbar');
const cancel = document.querySelector('.delete');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu-items');
// const button = document.querySelector('.btn-project');
// const main = document.querySelector('.project');
// const email = document.querySelector('.email');
// const form = document.querySelector('.form');
// const Warning = document.querySelector('.warning');

const activeToggle = () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
};

hamburger.addEventListener('click', activeToggle);

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', activeToggle));

cancel.addEventListener('click', activeToggle);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    Warning.innerHTML = 'Please the content of the email field has to be in lower case.';
  }
});
