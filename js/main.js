// События кликов для бургер меню
$(document).ready(
    document.addEventListener("DOMContentLoaded", function () {
        $('#burger').on("click", function () {
            $('.header').toggleClass("open");
        })
        const el = $('.nav__link');
        for (let i = 0; i < el.length; i++) {
            console.log(el[i])
            el[i].addEventListener("click", function () {
                $('.header').toggleClass("open");
            })
        }
        $(document).on("click", function (event) {
            const targetElement = $('#burger');
            if (!targetElement.is(event.target) && targetElement.has(event.target).length === 0) {
                $('.header').toggleClass("open");
            }
        })
    })
)


// События кликов для бургер меню
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("burger").addEventListener("click", function () {
//         document.querySelector("header").classList.toggle("open")
//     })
//     let el = document.querySelectorAll('.nav__link');
//     for (let i = 0; i < el.length; i++) {
//         el[i].addEventListener("click", function () {
//             document.querySelector("header").classList.toggle("open")
//         })
//     }
// })

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