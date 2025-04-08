const aboutSection = document.querySelector(".about");
const exploreKwandeSection = document.querySelector(".explore-kwande");

//  about section
const aboutObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// Ensure the about section is observed
if (aboutSection) {
  aboutObserver.observe(aboutSection);
} else {
  console.log("About section not found.");
}

// Intersection Observer for the exploreKwandeSection
const exploreObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// Ensure the exploreKwande section has an observer
if (exploreKwandeSection) {
  exploreObserver.observe(exploreKwandeSection);
} else {
  console.log("Explore Kwande section not found.");
}

// Gallery Modal Code
const galleryImages = document.querySelectorAll(".gallery-img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let images = [];

if (galleryImages.length > 0) {
  galleryImages.forEach((img, i) => {
    images.push(img.src);
    img.addEventListener("click", () => {
      currentIndex = i;
      openModal(images[i]);
    });
  });
} else {
  console.log("Gallery images not found.");
}

function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex];
});

function toggleMenu() {
  const overlay = document.getElementById("navOverlay");
  overlay.classList.toggle("active");
}
