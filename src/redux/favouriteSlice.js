import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    setFavourites(state, action) {
      state.favourites.push({
        lat: action.payload.lat,
        lon: action.payload.lon,
        temp: action.payload.temp,
        weather: action.payload.weather,
        name: action.payload.name,
        country: action.payload.country,
        humidity: action.payload.humidity,
        wind_speed: action.payload.wind_speed,
      });
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(
        i => i.name !== action.payload.name,
      );
    },
    updateFavourite(state, action) {
      const item = state.favourites.find(i => i.name === action.payload.name);
      item.temp = action.payload.temp;
      item.weather = action.payload.weather;
      item.humidity = action.payload.humidity;
      item.wind_speed = action.payload.wind_speed;
    },
  },
});

export const {setFavourites, removeFavourite, updateFavourite} =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
