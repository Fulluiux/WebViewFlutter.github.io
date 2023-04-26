

document.addEventListener('DOMContentLoaded', function() {
 
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  fetch('http://apiflutter-001-site1.btempurl.com/api/Usuarios/ValidarUsuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({tagUsuario: username, password: password})
  })
  .then(response => response.json())
  .then(data => {
    // aquí puedes hacer algo con la respuesta de tu API
    console.log(data);
  })
  .catch(error => console.error(error));
});
});