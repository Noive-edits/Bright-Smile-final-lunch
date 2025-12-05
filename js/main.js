// The reviews slide
const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const cardsPerSlide = 5;
const totalSlides = Math.ceil(cards.length / cardsPerSlide);

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20; // card + gap
    const moveX = currentIndex * cardsPerSlide * cardWidth;
    track.style.transform = `translateX(-${moveX}px)`;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop back
    }
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // go to last slide
    }
    updateSlider();
});

window.addEventListener("resize", updateSlider);
