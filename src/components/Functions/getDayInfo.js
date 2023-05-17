import {useSelector} from 'react-redux';

export const useGetDayInfo = () => {
  const data = useSelector(state => state.forecast.weekForecast.list);

  const getData = dt => {
    const info = [
      `${dt} 06:00:00`,
      `${dt} 12:00:00`,
      `${dt} 18:00:00`,
      `${dt} 21:00:00`,
    ];
    let result = [];
    for (let i = 0; i < info.length; i++) {
      result[i] = data.filter(date => date.dt_txt.includes(info[i]));
    }

    return result;
  };
  return {getData};
};
