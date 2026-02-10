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

// Corrected function
function handleViewChange(e) {
  // e.matches is true if width is 800px or less
  if (e.matches) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    

  } else {
    // Show them again when screen is bigger
    prevBtn.style.display = "block"; 
    nextBtn.style.display = "block";
  }
}

// 1. Define the query
const mql = window.matchMedia("(max-width: 800px)");

// 2. Listen for changes
mql.addEventListener("change", handleViewChange);

// 3. Run immediately on page load to check initial size
handleViewChange(mql);

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

/* Navbar toggle for small screens */
const navToggleBtn = document.getElementById('navToggle');
const navLinksEl = document.querySelector('.nav-links');
if (navToggleBtn && navLinksEl) {
  navToggleBtn.addEventListener('click', () => {
    navLinksEl.classList.toggle('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1068) navLinksEl.classList.remove('active');
  });
}


/* Move .care into .logo at <=1068px and hide original container */
(() => {
  const careEl = document.querySelector('.care');
  const logoEl = document.querySelector('.logo');
  if (!careEl || !logoEl) return;

  const originalContainer = careEl.parentNode; // container that held .care
  const originalDisplay = originalContainer && window.getComputedStyle(originalContainer).display;

  function handleCareMove() {
    const w = window.innerWidth;
    // priority: <=590 => move into nav-links (burger); <=1068 => move into logo; >1068 restore
    const navLinks = document.querySelector('.nav-links');

    if (w <= 590) {
      if (navLinks && !navLinks.contains(careEl)) {
        navLinks.appendChild(careEl);
      }
      if (originalContainer) originalContainer.style.display = 'none';
    } else if (w <= 1068) {
      if (!logoEl.contains(careEl)) {
        logoEl.appendChild(careEl);
      }
      if (originalContainer) originalContainer.style.display = 'none';
    } else {
      // restore to original
      if (originalContainer && !originalContainer.contains(careEl)) {
        originalContainer.appendChild(careEl);
      }
      if (originalContainer) originalContainer.style.display = originalDisplay || '';
    }
  }

  // run on load and resize
  window.addEventListener('resize', handleCareMove);
  // call immediately
  handleCareMove();
})();

