import { onOff } from "./components/on-off.js";
import { letItSnow } from "./components/snow.js";
import { background_lines } from "./components/line.js";
import { skew_fx } from "./components/skew.js";
import { learnMore } from "./components/learnMore.js";
onOff();
letItSnow();
background_lines();
skew_fx();
learnMore();
//footer:
document.querySelector('#svgGithub').addEventListener('click', () => {
    open('https://github.com/javadaller', '_blank');
});
document.querySelector('#svgLinkedin').addEventListener('click', () => {
    open('https://www.linkedin.com/in/arnaud-van-acker', '_blank');
});
