function reload() {
    document.location.reload(1),
    window.location.href="index.html"
}

function pagehomem() {window.location.href="homem.html"}
function pagemulher() {window.location.href="mulher.html"}
function pagekids() {window.location.href="kids.html"}



let totalSlides = document.querySelectorAll('.tenis--slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.tenis--slider').clientWidth;

document.querySelector('.tenis--slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;


function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.tenis--slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.tenis--slider--width').style.marginLeft =
        `-${newMargin}px`;
}

setInterval(goNext,8000)

function scam() {window.location.href="https://www.youtube.com/watch?v=T0eTWF257W0"}