const form = document.getElementById('form');
const u_name = document.getElementById('u_name');
const u_mail = document.getElementById('u_mail');
const u_pass = document.getElementById('u_pass');
const u_repass = document.getElementById('u_repass');

// Error showing
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Event listener
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (u_name.value === '') {
    showError(u_name, 'Username is required');
  } else {
    showSuccess(u_name);
  }

  if (u_mail.value === '') {
    showError(u_mail, 'Email is required');
  } else {
    showSuccess(u_mail);
  }

  if (u_pass.value === '') {
    showError(u_pass, 'Password is required');
  } else {
    showSuccess(u_pass);
  }

  if (u_repass.value === '') {
    showError(u_repass, 'Password is required');
  } else {
    showSuccess(u_repass);
  }

  if (u_pass.value.length < 6) {
    showError(u_pass, 'Minimum of 6 characters');
  } else {
    showSuccess(u_pass);
  }

  if (u_repass.value !== u_pass.value) {
    showError(u_repass, 'Password does not match');
  } else {
    showSuccess(u_repass);
  }
});