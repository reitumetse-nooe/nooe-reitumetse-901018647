// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {
  /*1. Date & Time Message */
  const dateTimeElement = document.createElement("p");
  const now = new Date();
  dateTimeElement.textContent = "Today is: " + now.toLocaleString();
  document.body.prepend(dateTimeElement);

  /* 2. Color Button */
  const colorBtn = document.createElement("button");
  colorBtn.textContent = "Change Background Color";
  document.body.appendChild(colorBtn);

  const colors = ["#f4a261", "#2a9d8f", "#e9c46a", "#264653", "#e76f51"];
  let colorIndex = 0;

  colorBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  });

  /* 3. Slideshow */
  const slides = [
    "images/acropolis-of-athens-tour-review.jpg",
    "images/militos_198_crete-agnikolaos_769x769.jpg",
    "images/santorini.jpg"
  ];

  let slideIndex = 0;
  const slideshowImg = document.createElement("img");
  slideshowImg.src = slides[slideIndex];
  slideshowImg.alt = "Slideshow of Greece";
  slideshowImg.width = 400;
  document.body.appendChild(slideshowImg);

  function showNextSlide() {
