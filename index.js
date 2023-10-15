

let scrollGallery = document.querySelector(".gallery");

let backBtn = document.getElementById("back-btn");

let nextBtn = document.getElementById("next-btn");


scrollGallery.addEventListener("wheel", (event) => {

    event.preventDefault();
    scrollGallery.style.scrollBehavior = "auto";
    scrollGallery.scrollLeft += event.deltaY;

});


nextBtn.addEventListener("click", () => {

    scrollGallery.style.scrollBehavior = "smooth";
    scrollGallery.scrollLeft += 1100;

});


backBtn.addEventListener("click", () => {

    scrollGallery.style.scrollBehavior = "smooth";
    scrollGallery.scrollLeft -= 1100;

});