const hamburg = document.querySelector(".header-right > a");
const nav = document.querySelector(".hamburger-menu");
const hamburgClose = document.querySelector(".close");

hamburg.addEventListener('click', function() {
    hamburg.classList.toggle("active");
    nav.classList.toggle("active");
})

hamburgClose.addEventListener('click', function() {
    nav.classList.remove("active");
}) 

const cicimiao = document.getElementById("barre");
cicimiao.style.color = "red";

const logoz = document.getElementById("logo");
logoz.style.color = "yellow";
logoz.style.backgroundColor = "red";

const div = document.querySelector("div.header-left");
div.append('mio testo');