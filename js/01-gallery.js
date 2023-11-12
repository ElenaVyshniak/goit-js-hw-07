import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener("click", tapGelleryItem);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map((item) => {
      // предполагаем, что item имеет свойства, например, src и alt для изображений
      return `<li class="gallery_item">
        <a class="gallery_link" href="${item.original}">
            <img class="gallery_image" width="340px" src="${item.preview}" alt="${item.description}"
            </a>
    </li>`;
    })
    .join("");
}
function tapGelleryItem(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery_image")) {
    return;
  }
  console.log(event.target);
}
