import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchAndSetData = (url, thenCallback) => {
  axios
    .get(url)
    .then(thenCallback)
    .catch(console.error);
};
