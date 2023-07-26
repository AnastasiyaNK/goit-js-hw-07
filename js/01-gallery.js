import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const createGalleryEl = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}" >
    <img class="gallery__image"
 src="${preview}" data-source="${original}" alt="${description}"></a>
 </li>`).join("");

galleryEl.insertAdjacentHTML("beforeend", createGalleryEl)
galleryEl.addEventListener('click', handlerClick)

function handlerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__item")) {
        return;
    };
    // щось перестає бібліотека працювати 
    

    const galleryClickImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${galleryClickImg}" width="800" height="600">
`)
    instance.show();


    
};

 





