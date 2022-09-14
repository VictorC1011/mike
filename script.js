let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = 
    `calc(100vw * ${totalSlides})`;


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
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft =
        `-${newMargin}px`;
}

setInterval(goNext,20000)



function reload() {
    document.location.reload(1),
    window.location.href="index.html"
}

function pagehomem() {window.location.href="homem.html"}
function pagemulher() {window.location.href="mulher.html"}
function pagekids() {window.location.href="kids.html"}

function tenis1() {window.location.href="tenis1.html"}
function tenis2() {window.location.href="tenis2.html"}
function tenis3() {window.location.href="tenis3.html"}
function tenis4() {window.location.href="tenis4.html"}
function tenis5() {window.location.href="tenis5.html"}

function colecao1() {window.location.href="colecao1.html"}
function colecao2() {window.location.href="colecao2.html"}
function colecao3() {window.location.href="colecao3.html"}

function tenis31() {window.location.href="tenis3-1.html"}
function tenis32() {window.location.href="tenis3-2.html"}
function tenis33() {window.location.href="tenis3-3.html"}

function tenis51() {window.location.href="tenis5-1.html"}
function tenis52() {window.location.href="tenis5-2.html"}
function tenis53() {window.location.href="tenis5-3.html"}

function tenis01() {window.location.href="tenis0-1.html"}
function tenis02() {window.location.href="tenis0-2.html"}
function tenis03() {window.location.href="tenis0-3.html"}

function h_1() {window.location.href="h-1.html"}
function h_2() {window.location.href="h-2.html"}
function h_3() {window.location.href="h-3.html"}

function m_1() {window.location.href="m-1.html"}
function m_2() {window.location.href="m-2.html"}
function m_3() {window.location.href="m-3.html"}

function k_1() {window.location.href="k-1.html"}
function k_2() {window.location.href="k-2.html"}
function k_3() {window.location.href="k-3.html"}

function m_1() {window.location.href="m-1.html"}
function m_2() {window.location.href="m-2.html"}
function m_3() {window.location.href="m-3.html"}

function ac1() {window.location.href="ac1.html"}
function ac2() {window.location.href="ac2.html"}
function ac3() {window.location.href="ac3.html"}
function ac4() {window.location.href="ac4.html"}
function ac5() {window.location.href="ac5.html"}
function ac6() {window.location.href="ac6.html"}
function ac7() {window.location.href="ac7.html"}
function ac8() {window.location.href="ac8.html"}
function ac9() {window.location.href="ac9.html"}

function pageacessorios() {window.location.href="acessorios.html"}