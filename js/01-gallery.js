import { galleryItems } from './gallery-items.js';
// // Change code below this line
const gallery = document.querySelector('.gallery');
const imagesMarkup  = createItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);
gallery.addEventListener('click', clickEvent);

function createItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    }).join('');    
}

function clickEvent(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imageLink = event.target.dataset.source;
    const imageAlt = event.target.dataset.alt;
    const imageToShow = `<img src="${imageLink}", alt="${imageAlt}">`;

    console.log(imageLink);

    const instance = basicLightbox.create(imageToShow);

    instance.show();
}

console.log(galleryItems);