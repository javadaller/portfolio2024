import { sleep } from "../helpers/functions.js";
export async function letItSnow() {
    let deg = 0;
    const background_texture = document.querySelector('#fx_snow');
    while (true) {
        deg += 90;
        if (deg > 270) {
            deg = 0;
        }
        background_texture.style.transform = 'rotate(' + deg + 'deg)';
        await sleep(100);
    }
}
