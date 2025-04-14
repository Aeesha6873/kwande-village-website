const aboutSectionEl = document.querySelector(".about");
const exploreKwandeSectionEl = document.querySelector(".explore-kwande");
const galleryImagesEl = document.querySelectorAll(".gallery-img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const overlay = document.querySelector("#navOverlay");

function createObserver(element) {
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(element);
}

// Call it for both sections
createObserver(aboutSectionEl);
createObserver(exploreKwandeSectionEl);

// Gallery
let currentIndex = 0;
let images = [];

if (galleryImagesEl.length > 0) {
  galleryImagesEl.forEach((img, i) => {
    images.push(img.src);
    img.addEventListener("click", () => {
      currentIndex = i;
      openModal(images[i]);
    });
  });
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
  overlay.classList.toggle("active");
}
