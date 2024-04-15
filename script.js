const slideIndex = [1, 2, 3, 4, 5];
let currentSlide = 1;


function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {currentSlide = 1}
  if (n < 1) {currentSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentSlide - 1].style.display = "block"; 
  dots[currentSlide - 1].className += " active";
}

// Function to advance the slide
function plusSlides(n) {
  showSlides(currentSlide += n);
}

// Function to show a specific slide based on a dot click
function currentSlide(n) {
  currentSlide = n;
  showSlides(currentSlide);
}

// Start the slideshow at the first slide
showSlides(currentSlide);
