const url =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = '9fada19855b31257e0c2332b55cc2c5f0456398b';
const query = 'моз';

const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + token,
  },
  body: JSON.stringify({
    query: query,
    locations: [{country: 'Беларусь'}],
  }),
};

export const useGetSearchLocation = () => {
  const getPlaceLocation = async () => {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Server error');
      }

      const result = await response.json();
      result.suggestions.forEach(element => {
        if (element.data.settlement != null) {
          console.log(element.data.settlement);
        }
      });
      // result.suggestions.forEach(element => {
      //   console.log(element.data.city);
      // });
    } catch (error) {
      console.log(error.message);
    }
  };
  return {getPlaceLocation};
};
