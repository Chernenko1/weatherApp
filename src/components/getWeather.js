import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {setDayForecast} from '../redux/forecastSlice';

const API_KEY = '4cf0d9fffdc9bad1d776be982e553ff5';

export const useGetWeather = () => {
  const data = useSelector(state => state.location);
  const dispatch = useDispatch();

  // console.log(data);

  const getDayForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}61&lon=${data.longitude}&appid=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error('Server error');
      }

      const dayForecast = await response.json();

      dispatch(setDayForecast({forecast: dayForecast}));
    } catch (error) {
      console.log(error.message);
    }
  };

  return {getDayForecast};
};
