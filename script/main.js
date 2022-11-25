// toggle Menu
const hamburger = document.querySelector('.toolbar');
const cancel = document.querySelector('.delete');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu-items');
const email = document.querySelector('.email');
const form = document.querySelector('.my-form');
const Warning = document.querySelector('.warning');
const textarea = document.querySelector('.textarea');
const nameForm = document.querySelector('.name-form');

const activeToggle = () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  cancel.classList.toggle('active');
};

hamburger.addEventListener('click', activeToggle);

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', activeToggle));

cancel.addEventListener('click', activeToggle);

// check local storage
function getData() {
  const formData = {
    nameForm: nameForm.value,
    textarea: textarea.value,
    email: email.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function persistData() {
  if (!localStorage.getItem('formData')) {
    getData();
  } else {
    const fetchData = JSON.parse(localStorage.getItem('formData'));
    nameForm.setAttribute('value', fetchData.nameForm);
    email.setAttribute('value', fetchData.email);
    textarea.textContent = fetchData.texarea;
  }
}

window.onload = () => {
  persistData();
};

// form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    Warning.innerHTML = 'Please the content of the email should be in lower case.';
  } else {
    Warning.innerHTML = '';
    persistData();
    form.submit();
  }
});

nameForm.addEventListener('change', getData);
email.addEventListener('change', getData);
textarea.addEventListener('change', getData);
