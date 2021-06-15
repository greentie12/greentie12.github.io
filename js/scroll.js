const imageContainer = document.querySelectorAll(".gallery-flex");

window.addEventListener("scroll", checkImages);

function checkImages() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  imageContainer.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    const width = window.innerWidth;

    if (imageTop < triggerBottom && width < 768 && width >= 400) {
      image.classList.add("show");
    } else {
      image.classList.remove("show");
    }

    if (width >= 768 || width < 400) {
      image.classList.add("show");
    }
  });
}
