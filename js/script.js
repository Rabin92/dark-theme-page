// Email Validation

const inputEmail = document.querySelector('#email');
const button = document.querySelector('#js-btn');
const errorMsg = document.querySelector('#js-error');

errorMsg.style.display = 'none';

button.addEventListener('click', e => {
  e.preventDefault();
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.value !== '' && inputEmail.value.match(mailFormat)) {
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
});
