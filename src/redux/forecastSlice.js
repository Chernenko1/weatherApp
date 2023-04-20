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
    setWeekForecast(state, action) {
      state.weekForecast = action.payload.forecast;
    },
  },
});

export const {setDayForecast, setWeekForecast} = forecastSlice.actions;

export default forecastSlice.reducer;
