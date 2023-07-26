import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const createGalleryEl = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
 src="${preview}" alt="${description}"></a></li>`).join("");

galleryEl.insertAdjacentHTML("beforeend", createGalleryEl)

let lightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captions: 'true',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250'
});



