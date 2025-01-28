document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a, .view-work-button');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const headerOffset = 30;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;
    const navbarPlaceholder = document.createElement('div');
    navbarPlaceholder.style.height = `${navbar.offsetHeight}px`;
    navbar.parentNode.insertBefore(navbarPlaceholder, navbar);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= sticky) {
            navbar.classList.add('sticky');
            navbarPlaceholder.style.display = 'block';
        } else {
            navbar.classList.remove('sticky');
            navbarPlaceholder.style.display = 'none';
        }
    });
});