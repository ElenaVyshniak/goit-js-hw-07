// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// const galleryContainer = document.querySelector(`.gallery`);
// const galleryMarkup = createGalleryItemsMarkup(galleryItems);

// galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

// galleryContainer.addEventListener("click", tapGelleryItem);

// function createGalleryItemsMarkup(galleryItems) {
//   return galleryItems
//     .map((item) => {
//       // предполагаем, что item имеет свойства, например, src и alt для изображений
//       return `<li class="gallery_item">
//         <a class="gallery_link" href="${item.original}">
//             <img class="gallery_image"  src="${item.preview}"  alt="${item.description}" width="340px"
//             </a>
//     </li>`;
//     })
//     .join("");
// }
// function tapGelleryItem(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains("gallery_image")) {
//     return;
//   }
//   console.log(event.target);
// }

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const originalImageURL = event.target.dataset.source;
  // console.log(originalImageURL);

  const lightBox = basicLightbox.create(
    `<img src="${originalImageURL}" width="800" height="600"/>`
  );
  lightBox.show();

  const closeLightBox = (event) => {
    if (event.key === "Escape") {
      lightBox.close();
      document.removeEventListener("keydown", closeLightBox);
    }
  };
  document.addEventListener("keydown", closeLightBox);
}

// console.log(handleClick(event));

// console.log(galleryItems);
