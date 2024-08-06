import { sleep } from "../helpers/functions.js"

export async function skew_fx() {
    let freq: number
    const display: HTMLElement = document.querySelector('#main_screen')
    while(true) {
        display.classList.add('skew')
        await sleep(5000)
        display.classList.remove('skew')
        freq=1500+Math.floor(Math.random() * 5000)
        await sleep(freq)
    }
}
