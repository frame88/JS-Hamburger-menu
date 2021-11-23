const hamburgz = document.querySelector(".header-right > a");
const navz = document.querySelector(".hamburger-menu");
const hamburgClosez = document.querySelector(".close");

hamburgz.addEventListener('click', function () {
    hamburgz.classList.toggle("active");
    navz.classList.toggle("active");
})

hamburgClosez.addEventListener('click', function () {
    navz.classList.remove("active");
})

const modcolor = document.getElementById("barre");
modcolor.style.color = "red";

const logozz = document.getElementById("logo");
logozz.style.color = "yellow";
logozz.style.backgroundColor = "red";

const divz = document.querySelector("div.header-left");
divz.append('mio testo');