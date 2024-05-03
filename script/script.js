const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function changeTextLetter(element) {
  let iteration = 0;

  // get initial text
  const initText = element.innerText;

  // clear previous interval
  clearInterval(interval);

  // set interval to change text letter by letter 
  interval = setInterval(() => {
    element.innerText = initText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return element.dataset.textValue[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= element.dataset.textValue.length) {
      clearInterval(interval);
    }

    // increase iteration
    iteration += 1 / 10;
  }, 50);
}

const animTexts = document.querySelectorAll(".animated-text");

animTexts.forEach((element) => {
  changeTextLetter(element);
});

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
