export function learnMore() {
    const links = Array.from(document.querySelectorAll('.learnMoreLink'));
    links.forEach(link => {
        link.setAttribute('isOpen', 'false');
        link.addEventListener('click', () => {
            const text = link.previousElementSibling;
            if (link.getAttribute('isOpen') === 'false') {
                link.setAttribute('isOpen', 'true');
                link.innerText = 'Réduire...';
                text.style.display = 'block';
            }
            else {
                link.setAttribute('isOpen', 'false');
                link.innerText = 'En savoir plus...';
                text.style.display = 'none';
            }
        });
    });
}
