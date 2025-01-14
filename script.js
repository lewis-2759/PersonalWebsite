document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const nav = document.querySelector('nav');
    const navArrow = document.querySelector('.menu-icon');

    nav.addEventListener('mouseover', () => {
        nav.style.width = '12.5em'; // 200px
        navArrow.style.display = 'none';
    });
    nav.addEventListener('mouseout', () => {
        nav.style.width = '3.125em'; // 50px
        navArrow.style.display = 'block';
    });
});