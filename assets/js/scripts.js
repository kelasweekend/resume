const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;
const darkmode = localStorage.getItem('theme');

function modeSwitch() {
    isLight = !isLight;
    isLight ? toggle.innerText = "🌞" : toggle.innerText = "🌚";
    var rootElement = document.body;
    // if (isLight) {
    //     localStorage.setItem('theme', 'dark');
    // } else {
    //     localStorage.setItem('theme', 'light');
    // }
    rootElement.classList.toggle("lightMode");
}