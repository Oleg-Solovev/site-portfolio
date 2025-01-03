// События кликов для бургер меню
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
    let el = document.querySelectorAll('.nav__link');
    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open")
        })
    }
})

// Галерея
let swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
        el: ".gallery-pagination",
        type: "fraction",
        clickable: true
    },
    navigation: {
        nextEl: ".gallery__btn-next",
        prevEl: ".gallery__btn-prev"
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 25,
        }
    },
});