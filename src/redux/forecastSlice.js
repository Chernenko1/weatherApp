import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dayForecast: [],
  weekForecast: [],
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reduces: {
    setDayForecast(state, action) {
      state.dayForecast = action.payload.forecast;
    },
  },
});

export const {setDayForecast} = forecastSlice.actions;

export default forecastSlice.reducer;
