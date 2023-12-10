document.getElementById('contact_form').addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = `mailto:enzoenterprises@gmail.com?subject=Please get back to me - ${data.get('name')}&body=Name: ${data.get('name')}%0d%0aEmail: ${data.get('email')}%0d%0a%0d%0a${data.get('message')}`
});



let current = 0;
const slides = document.querySelectorAll("#gallery img");
const totalSlides = slides.length;

setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % totalSlides;
    slides[current].classList.add('active');
}, 3000); // Change image every 3 seconds