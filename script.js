document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a, .view-work-button');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const headerOffset = document.querySelector('nav').offsetHeight
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});