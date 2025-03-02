const key = '27649790-7921965d78458e948654f4c92';
const baseURL = 'https://pixabay.com/api/?';

function fetchImage(query) {
  return new Promise((resolve, reject) => {
    const searchParams = new URLSearchParams({
      key,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q: query || '',
    });

    fetch(baseURL + searchParams.toString(), {
      method: 'GET',
    })
      .then(resolve)
      .catch(reject);
  }).then(response => {
    if (response.status !== 200 || !response.ok)
      throw new Error('Request is failed with status: ' + response.status);

    return response.json();
  });
}

export default fetchImage;
