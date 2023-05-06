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
        lan: action.payload.lan,
        lon: action.payload.lon,
      });
    },
  },
});

export const {setFavourites} = favouriteSlice.actions;

export default favouriteSlice.reducer;
