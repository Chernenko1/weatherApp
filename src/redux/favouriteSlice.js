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
        name: action.payload.name,
      });
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(
        i => i.name !== action.payload.name,
      );
    },
  },
});

export const {setFavourites, removeFavourite} = favouriteSlice.actions;

export default favouriteSlice.reducer;
