import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tempType: 'celcius',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setType(state, action) {
      state.tempType = action.payload.type;
    },
  },
});

export const {setType} = settingsSlice.actions;

export default settingsSlice.reducer;
