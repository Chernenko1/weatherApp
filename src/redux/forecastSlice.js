import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dayForecast: null,
  weekForecast: null,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setDayForecast(state, action) {
      state.dayForecast = action.payload.forecast;
    },
  },
});

export const {setDayForecast} = forecastSlice.actions;

export default forecastSlice.reducer;
