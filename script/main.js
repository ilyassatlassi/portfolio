// toggle Menu
const hamburger = document.querySelector('.toolbar');
const cancel = document.querySelector('.delete');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu-items');
// const button = document.querySelector('.btn-project');
// const main = document.querySelector('.project');
const email = document.querySelector('.email');
const form = document.querySelector('.my-form');
const Warning = document.querySelector('.warning');
const textarea = document.querySelector('.texarea');
const nameForm = document.querySelector('.name-form');
// const valid = document.querySelector('.button-contact');

const activeToggle = () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
};

hamburger.addEventListener('click', activeToggle);

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', activeToggle));

cancel.addEventListener('click', activeToggle);


// form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    Warning.innerHTML = 'Please the content of the email should be in lower case.';
  } else {
    Warning.innerHTML = '';
    form.submit();
  }
});


