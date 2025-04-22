// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carrossel de Depoimentos
let currentIndex = 0;
const items = document.querySelectorAll('.depoimento');
const totalItems = items.length;

function moveCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    document.getElementById('carousel-items').style.transform = `translateX(${offset}%)`;
}

// Formulário de Contato
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Por favor, preencha todos os campos!';
        formMessage.style.color = '#ff3333';
        return;
    }

    formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    formMessage.style.color = '#ff9800';
    this.reset();
});
