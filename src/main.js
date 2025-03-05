import iziToast from 'izitoast';

import { renderGallery, resetGalelry } from './js/render-functions';
import { loaderShow, loaderHide } from './js/loader';

import fetchImage, { paginationConfig } from './js/pixabay-api';
import { btnMoreHide, isbtnMoreHidden, showLoadMore } from './js/btn-show-more';

const searchForm = document.querySelector('form');
const loadMore = document.querySelector('.load-more');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchValue = event.target.search.value.trim();
  if (!searchValue)
    return iziToast.warning({
      position: 'topRight',
      message: 'Please fill-in the search input',
    });

  event.target.reset();

  btnMoreHide();
  resetGalelry();
  loaderShow();
  fetchAndRender(searchValue);
});

loadMore.addEventListener('click', async event => {
  await fetchAndRender();

  scrollDown();
  if (isbtnMoreHidden())
    iziToast.success({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
});

async function fetchAndRender(searchValue) {
  try {
    const data = await fetchImage(searchValue);
    if (data.totalHits === 0)
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    renderGallery(data.hits);
  } catch (error) {
    iziToast.warning({
      position: 'topRight',
      message: error.message,
    });
  }

  loaderHide();
  showLoadMore(paginationConfig);
}

function scrollDown() {
  const { height } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({ top: height, behavior: 'smooth' });
}
