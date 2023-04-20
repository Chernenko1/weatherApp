import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  longitude: null,
  latitude: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCoords(state, action) {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const {setCoords} = locationSlice.actions;

export default locationSlice.reducer;
