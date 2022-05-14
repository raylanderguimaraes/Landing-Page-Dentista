const btnMobile = document.getElementById("btn-mobile");
let btnConsulta = document.querySelectorAll(".btn-consulta");



//Config. slider de fotos

let time = 4000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
max = images.length;




function nextImage() {

    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("selected")

}

function start() {

    setInterval(() => {
        nextImage();
    }, time)


}

window.addEventListener("load", start);




function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);














