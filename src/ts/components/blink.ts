import { sleep } from "../helpers/functions.js"

export async function blinkBLink() {
    const links: Array<HTMLElement> = Array.from(document.querySelectorAll('a'))

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            
        })
    });
}