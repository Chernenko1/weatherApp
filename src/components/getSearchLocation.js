import React, {useEffect, useState} from 'react';
import {useGetUniqElements} from './Functions/getUniqElements';

const url =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = '9fada19855b31257e0c2332b55cc2c5f0456398b';

export const useGetSearchLocation = ({query}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {makeUniq} = useGetUniqElements();

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

  // console.log(data);
  const getData = () => {
    if (query) {
      setData([]);
      getPlaceLocation();
    } else {
    }
  };

  const getPlaceLocation = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Server error');
      }

      const result = await response.json();

      const sortResult = makeUniq(result.suggestions);
      setData(sortResult);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  return {data, loading};
};
