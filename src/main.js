import iziToast from 'izitoast';

import { renderGallery, resetGalelry } from './js/render-functions';
import { loaderShow, loaderHide } from './js/loader';

import fetchImage from './js/pixabay-api';

const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchValue = event.target.search.value.trim();
  if (!searchValue)
    return iziToast.warning({
      position: 'topRight',
      message: 'Please fill-in the search input',
    });

  event.target.reset();

  resetGalelry();
  loaderShow();
  fetchImage(searchValue)
    .then(data => {
      if (data.totalHits === 0)
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      renderGallery(data.hits);
    })
    .catch(error => {
      iziToast.warning({
        position: 'topRight',
        message: error.message,
      });
    })
    .finally(() => {
      loaderHide();
    });
});
