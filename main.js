const form = document.getElementById('form');
const email = document.getElementById('email');
const errorEmail = document.getElementById('error');
const errorImg = document.getElementById('error-img');

form.addEventListener('submit', (e) => {
  checkEmail();
  e.preventDefault();
});

function checkEmail() {
  const emailValue = email.value.trim();
  if (emailValue === '') {
    setErrorForEmail(email, 'Please enter a valid email address');
    email.placeholder = 'example#mail.com';
    errorEmail.style.display = 'block';
    errorImg.style.display = 'block';
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorForEmail(email, 'Please enter a valid email address');
    errorEmail.style.display = 'block';
    errorImg.style.display = 'block';
    return false;
  } else {
    setSuccessFor(email);
    errorEmail.style.display = 'none';
    errorImg.style.display = 'none';
    return true;
  }
}

function setErrorForEmail(input, message) {
  const formControl = input.parentElement;
  const errorEmail = formControl.querySelector('#error');
  errorEmail.innerText = message;
  formControl.className = 'absolute w-full form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'absolute w-full form-control success';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
