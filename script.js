function startCarousel(id){
    const carousel = document.getElementById(id);
    const images = carousel.getElementsByTagName("img");
    let index = 0;

    setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 4000);
}

startCarousel("boedo");
startCarousel("balvanera");
startCarousel("balvanera2");