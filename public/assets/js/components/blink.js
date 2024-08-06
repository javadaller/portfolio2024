export async function blinkBLink() {
    const links = Array.from(document.querySelectorAll('a'));
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
        });
    });
}
