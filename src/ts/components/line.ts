import { sleep } from "../helpers/functions.js"

export async function background_lines() {
    let freq: number, direction: number
    const scanline: HTMLElement = document.querySelector('#fx_scanline')
    while(true) {
        direction = Math.round(Math.random())
        if (direction == 0) {
            scanline.classList.add('scanline')
            await sleep(1250)
            scanline.classList.remove('scanline')
        } else {
            scanline.classList.add('scanlineReverse')
            await sleep(1250)
            scanline.classList.remove('scanlineReverse')
        }
        freq = 1500+Math.floor(Math.random() * 5500)
        await sleep(freq)
    }
}
