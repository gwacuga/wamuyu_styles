document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navbar ul");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
