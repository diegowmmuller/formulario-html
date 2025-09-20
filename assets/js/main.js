const form = document.getElementById('formulary');
const response = document.getElementById('response');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // impede recarregar a página

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;

  console.log(`Nome digitado é ${name}, idade: ${age}, email: ${email}`);
  response.innerHTML = `<p>Nome digitado é ${name}<br> idade: ${age}<br> email: ${email}</p>`;
});
