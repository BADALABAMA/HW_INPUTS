const app = document.querySelector('#app');
function Tag(tags = {}) {
  const { tag, className, id, textContent, placeholder } = tags;

  const element = document.createElement(tag);

  element.className = className || ' ';
  element.id = id || ' ';
  element.textContent = textContent || ' ';
  element.placeholder = placeholder || ' ';

  return element;
}

const form = Tag({
  tag: 'div',
  className: 'form',
});

const loginInput = Tag({
  tag: 'input',
  className: 'input',
  id: 'login-input',
});

const passwordInput = Tag({
  tag: 'input',
  className: 'input',
  id: 'password-input',
});

const button = Tag({
  tag: 'button',
  className: 'submit-btn',
  textContent: 'Submit',
});

form.append(loginInput, passwordInput, button);
app.append(form);

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    e.preventDefault();

    console.log(e.target.value);
  });
});

const btn = document.querySelector('.submit-btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
    login: loginInput.value,
    password: passwordInput.value,
  };

  console.log(data);
});
