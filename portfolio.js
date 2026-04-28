const words = ["Web Developer", "WordPress Developer", "Frontend Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
  let currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 80 : 80;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 200;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// Skills progress bar animation
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".progress");
  bars.forEach((bar, index) => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width;
    }, index * 300);
  });
});

// Project tabs
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const targetTab = tab.getAttribute("data-tab");
    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");
    contents.forEach(content => {
      content.classList.toggle("active", content.getAttribute("data-tab") === targetTab);
    });
  });
});

(function () {
  emailjs.init("ME8MYu_K_MkvWcklW");
})();

function handleFormSubmit(e) {
  e.preventDefault();

  const btn = document.querySelector(".submit-btn");
  const thankYouMsg = document.getElementById("thankyou-msg");

  btn.innerText = "Sending...";
  btn.disabled = true;

  const templateParams = {
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: "Portfolio Contact"
  };

  emailjs.send(
    "service_40nr0wk",
    "template_t5x75ue",
    templateParams,
    "ME8MYu_K_MkvWcklW"
  )
  .then(function () {
    document.getElementById("contact-form").reset();
    btn.innerText = "Send Message ✉️";
    btn.disabled = false;

    thankYouMsg.style.display = "block";

    setTimeout(() => {
      thankYouMsg.style.display = "none";
    }, 5000);
  })
  .catch(function (error) {
    console.error("FULL ERROR:", error);
    btn.innerText = "Send Message ✉️";
    btn.disabled = false;
    thankYouMsg.style.display = "flex";
    thankYouMsg.querySelector("p").textContent = "Oops! Something went wrong. Please try again.";
    thankYouMsg.style.borderColor = "rgba(244, 67, 54, 0.4)";
    thankYouMsg.style.background = "rgba(244, 67, 54, 0.08)";
    thankYouMsg.querySelector("span").textContent = "❌";
    thankYouMsg.querySelector("p").style.color = "#e57373";
    setTimeout(() => {
      thankYouMsg.style.display = "none";
    }, 5000);
  });
}

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
});

// Close menu when a nav link is clicked
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  });
});
