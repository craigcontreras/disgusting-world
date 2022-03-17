import { loadAnimation } from "lottie-web/build/player/lottie_light.min.js";

window.onbeforeunload = () => window.scrollTo(0, 0);

const headerAnim = loadAnimation({
    container: document.querySelector("#header-anim"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    progressiveLoad: true,
    path: '/assets/json/header.json'
});