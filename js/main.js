document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
    // document.querySelectorAll("nav__link").addEventListener("click", function() {
    //     document.querySelector("header").classList.toggle("open")
    // })
})