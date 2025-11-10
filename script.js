// Category Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const mediaCards = document.querySelectorAll(".media-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.category;
    mediaCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Hover preview for videos
mediaCards.forEach((card) => {
  const video = card.querySelector("video");
  if (video) {
    card.addEventListener("mouseenter", () => video.play());
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightboxVideo");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close");

mediaCards.forEach((card) => {
  card.addEventListener("click", () => {
    const video = card.querySelector("video");
    const img = card.querySelector("img");
    lightbox.style.display = "flex";

    if (video) {
      lightboxVideo.src = video.src;
      lightboxVideo.style.display = "block";
      lightboxImg.style.display = "none";
      lightboxVideo.play();
    } else if (img) {
      lightboxImg.src = img.src;
      lightboxImg.style.display = "block";
      lightboxVideo.style.display = "none";
    }
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxVideo.pause();
});
