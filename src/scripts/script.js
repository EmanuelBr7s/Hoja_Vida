// Animaciones suaves al scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section, aside').forEach((el) => {
    observer.observe(el);
});

// Validación de formulario mejorada
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, completa todos los campos',
            icon: 'error',
            confirmButtonColor: '#7c4dff'
        });
        return;
    }
    
    // Aquí iría la lógica de envío
    Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarme',
        icon: 'success',
        confirmButtonColor: '#7c4dff'
    });
    form.reset();
});

// Efecto de typing para el header
const welcomeButton = document.getElementById('welcomeButton');
welcomeButton.addEventListener('click', () => {
    Swal.fire({
        title: '¡Bienvenido!',
        text: 'Gracias por visitar mi portafolio',
        icon: 'info',
        confirmButtonColor: '#7c4dff'
    });
});
