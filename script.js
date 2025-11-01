const slides = document.querySelectorAll(".slide");
let counter = 0;

// Position each slide next to each other (horizontally)
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`; // position slides side-by-side
});

// Go to previous slide
const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1; // loop to last
  }
  slideImages();
};

// Go to next slide
const goNext = () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0; // loop back to first
  }
  slideImages();
};

// Move slides horizontally
const slideImages = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`; // ✅ fixed: removed extra "100"
  });
};
