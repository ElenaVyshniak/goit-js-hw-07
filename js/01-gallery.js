import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryItems = [
  {
    smallImage: "small-image1.jpg",
    largeImage: "large-image1.jpg",
    alt: "Image 1 description",
  },
  {
    smallImage: "small-image2.jpg",
    largeImage: "large-image2.jpg",
    alt: "Image 2 description",
  },
  // Додайте інші елементи галереї
];

const gallery = document.querySelector(".gallery");

// Створення розмітки галереї
function createGallery() {
  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = item.largeImage;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = item.smallImage;
    galleryImage.dataset.source = item.largeImage;
    galleryImage.alt = item.alt;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    gallery.appendChild(galleryItem);
  });
}

createGallery();

// Реалізація делегування та відкриття модального вікна
gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "IMG") {
    const source = e.target.dataset.source;

    const lightbox = basicLightbox.create(
      `<img src="${source}" alt="Image description">`
    );

    lightbox.show();

    // Закриття модального вікна при натисканні клавіші "Escape"
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        lightbox.close();
      }
    });
  }
});
