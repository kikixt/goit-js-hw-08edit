// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'; 
import { galleryItems } from './gallery-items.js'; 
// Change code below this line

console.log(galleryItems);

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');

  // Function to create gallery items
  function createGalleryItems(items) {
    return items.map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    }).join('');
  }

  galleryContainer.innerHTML = createGalleryItems(galleryItems);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
});
