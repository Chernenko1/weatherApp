import {useDispatch, useSelector} from 'react-redux';
import {updateFavourite} from '../redux/favouriteSlice';

const API_KEY = '4cf0d9fffdc9bad1d776be982e553ff5';

export const useUpdateWeather = () => {
  const data = useSelector(state => state.favourite.favourites);
  const dispatch = useDispatch();

  const updateForecast = async () => {
    for (let i = 0; i !== data.length; i++) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data[i].lat}61&lon=${data[i].lon}&appid=${API_KEY}`,
        );

        if (!response.ok) {
          throw new Error('Server error');
        }

        const answ = await response.json();
        dispatch(
          updateFavourite({
            name: answ.name,
            temp: answ.main.temp,
            weather: answ.weather[0].main,
            humidity: answ.main.humidity,
            wind_speed: answ.wind.speed,
          }),
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return {updateForecast};
};
