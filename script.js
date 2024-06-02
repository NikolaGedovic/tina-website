// // Hamburger Menu Script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-list-container");
const contentPlaceholder = document.querySelector("#content-placeholder");
const promoVideoContainer = document.querySelector(".promo-video-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Adjust the promo video container margin when the menu is active
  if (navMenu.classList.contains("active")) {
    const navbarHeight = navMenu.offsetHeight;
    contentPlaceholder.style.marginTop = `${navbarHeight}px`;
    promoVideoContainer.style.marginTop = '5rem';
  } else {
    // Reset the margins when the menu is inactive
    contentPlaceholder.style.marginTop = '0';
    promoVideoContainer.style.marginTop = '0';
  }
});

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  // Reset the main content position when a nav link is clicked
  contentPlaceholder.style.marginTop = '0';
  promoVideoContainer.style.marginTop = '0';
}));

// Toggle Button Main Page Video
let toggleButton = document.querySelector(".btn-play-btn");
let videoContainer = document.querySelector(".promo-video-container");
let promoVideo = document.querySelector(".promo-video");

toggleButton.onclick = function () {
  toggleButton.style.display = "none";
  videoContainer.style.display = "block";
  promoVideo.style.display = "block";

  // Adjust the promo video container margin when the video is revealed and menu is active
  if (navMenu.classList.contains("active")) {
    promoVideoContainer.style.marginTop = '5rem';
  }
};