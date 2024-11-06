// Validación de formulario
const form = document.getElementById('contactForm'); 

form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Comprobación de campos vacíos
    if (name === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});

// Función de bienvenida al hacer clic en el botón
const welcomeButton = document.getElementById('welcomeButton');

if (welcomeButton) {
    welcomeButton.addEventListener('click', function() {
        alert('¡Bienvenido a mi página web!');
    });
}
