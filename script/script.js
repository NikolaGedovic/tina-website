// // Hamburger Menu Script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-list-container");
const contentPlaceholder = document.querySelector("#content-placeholder");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // If the menu is active, push down the main content
  if (navMenu.classList.contains("active")) {
    const navbarHeight = navMenu.offsetHeight;
    contentPlaceholder.style.marginTop = `${navbarHeight}px`;
  } else {
    // If the menu is inactive, reset the main content position
    contentPlaceholder.style.marginTop = '0';
  }
});

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  // Reset the main content position when a nav link is clicked
  contentPlaceholder.style.marginTop = '0';
}));