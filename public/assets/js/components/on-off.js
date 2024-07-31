export function onOff() {
    let isOn = true;
    const button = document.querySelector('#on-off_button');
    const led = document.querySelector('#on-off_led');
    const main = document.querySelector('#main_screen');
    button.addEventListener('click', () => {
        if (isOn) {
            isOn = false;
            main.style.display = 'none';
            led.style.backgroundColor = 'black';
            led.style.boxShadow = 'none';
        }
        else {
            isOn = true;
            main.style.display = 'block';
            led.style.backgroundColor = 'greenyellow';
            led.style.boxShadow = '0px 0px 7px greenyellow';
        }
    });
}
