import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';

const API_KEY = '4cf0d9fffdc9bad1d776be982e553ff5';

export const Weather = () => {
  // const [date, setDate] = useState(null);

  const date = useSelector(state => state.location);

  const getDayForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${date.latitude}61&lon=${date.longitude}&appid=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error('Server error');
      }

      const dayForecast = await response.json();
      // console.log(dayForecast);
    } catch (error) {
      console.log(error.message);
    }
  };

  getDayForecast();
  return <View></View>;
};
