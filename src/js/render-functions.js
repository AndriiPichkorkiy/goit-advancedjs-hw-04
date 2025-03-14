import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');

const lightBox = new SimpleLightbox('.gallery .gallery-item a', {
  captionDelay: 250, //ms
  captionsData: 'alt',
});

function renderGallery(hits) {
  const markup = hits
    .map(item => {
      return `
        <li class="gallery-item">
            <a href="${item.largeImageURL}">
                <div class="image-wrapper"><img src="${item.webformatURL}" alt="${item.tags}" /></div>
                <ul class="image-description">
                    <li class="gallery-description">
                        <h3 class="description-title">Likes</h3>
                        <p class="description-value">${item.likes}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Views</h3>
                        <p class="description-value">${item.views}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Comments</h3>
                        <p class="description-value">${item.comments}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Downloads</h3>
                        <p class="description-value">${item.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightBox.refresh();
}

function resetGalelry() {
  gallery.innerHTML = '';
}

export { renderGallery, resetGalelry };
