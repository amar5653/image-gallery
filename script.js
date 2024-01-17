var scrollGallery = document.querySelector(".gallery");
var backBtn = document.getElementById("back");
var nextBtn = document.getElementById("next");

scrollGallery.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scrollGallery.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", ()=>{
    scrollGallery.style.scrollBehaviour = "smooth";
    scrollGallery.scrollLeft += 900;
})

backBtn.addEventListener("click", ()=>{
    scrollGallery.style.scrollBehaviour = "smooth";
    scrollGallery.scrollLeft -= 900;
})