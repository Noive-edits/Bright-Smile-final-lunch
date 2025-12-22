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


const t =true
const f =false

let counter = 1;

const form = document.getElementById("form");
const h3 = document.getElementById("h3");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("name").value.trim();
  const lastName = document.getElementById("name2").value.trim();
  const email = document.getElementById("emailadress").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;

  // reset alert
  h3.style.display = "none";
  h3.innerText = "";

  //  Empty fields
  if (!firstName || !lastName || !email || !phone || !date) {
    h3.style.display = "block";
    h3.innerText = "Fill all the fields";
    return;
  }

  //  Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    h3.style.display = "block";
    h3.innerText = "Please enter a valid email address";
    return;
  }

  //  Phone validation
  if (!/^\d{10,}$/.test(phone)) {
    h3.style.display = "block";
    h3.innerText = "Phone number must be at least 10 digits";
    return;
  }
let appo = document.getElementById("appo")

  
  const tableBody = document.querySelector("#table tbody");

  tableBody.innerHTML += `
    <tr>
      <td>${counter}</td>
      <td>${firstName} ${lastName}</td>
      <td>${email}</td>
      <td>${phone}</td>
      <td>${date}</td>
    </tr>
  `;

  counter++;
  form.reset();
  appo.style.display="block"
});


const toggleBtn   = document.getElementById("chatToggle");
const chatSidebar = document.getElementById("chatSidebar");
const closeBtn    = document.getElementById("chatClose");

/* Open / Close sidebar from button */
toggleBtn.addEventListener("click", () => {
    chatSidebar.classList.toggle("active");
});

/* Close sidebar from X icon */
closeBtn.addEventListener("click", () => {
    chatSidebar.classList.remove("active");
});

/* Show button after 1000px scroll */
window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
        toggleBtn.classList.add("show");
    } else {
        toggleBtn.classList.remove("show");
    }
});

