import axios from 'axios';

const key = '27649790-7921965d78458e948654f4c92';
const baseURL = 'https://pixabay.com/api/';

const instance = axios.create({
  baseURL,
  timeout: 1000,
  params: { key },
});

export const paginationConfig = {
  page: 1,
  total: null,
  query: '',
  per_page: 15,
};

async function fetchImage(query) {
  if (query) {
    paginationConfig.page = 1;
  }

  const searchParams = {
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query || paginationConfig.query,
    per_page: paginationConfig.per_page,
    page: paginationConfig.page,
  };

  const response = await instance.request({
    params: searchParams,
  });

  paginationConfig.total = response.data.total;
  paginationConfig.page += 1;
  if (query) paginationConfig.query = query;

  if (response.status !== 200) throw new Error(response.status);

  return response.data;

  // return new Promise((resolve, reject) => {
  //   const searchParams = new URLSearchParams({
  //     key,
  //     image_type: 'photo',
  //     orientation: 'horizontal',
  //     safesearch: true,
  //     q: query || '',
  //   });

  //   fetch(baseURL + searchParams.toString(), {
  //     method: 'GET',
  //   })
  //     .then(resolve)
  //     .catch(reject);
  // }).then(response => {
  //   if (response.status !== 200 || !response.ok)
  //     throw new Error('Request is failed with status: ' + response.status);

  //   return response.json();
  // });
}

export default fetchImage;
