import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bikes: []
}

export const bikeSlice = createSlice({
  name: 'bike',
  initialState,
  reducers: {
    addBike: (state, action) => {
      state.bikes.push(action.payload);
    },
    updateBike: (state, action) => {
      const index = state.bikes.findIndex(bike => bike.id === action.payload.id);
      if (index !== -1) {
        state.bikes[index] = { ...state.bikes[index], ...action.payload };
      }
    },
    deleteBike: (state, action) => {
      state.bikes = state.bikes.filter(bike => bike.id !== action.payload);
    },
    setInitialBikes: (state, action) => {
      state.bikes = action.payload;
    }
  },
});

export const { addBike, updateBike, deleteBike, setInitialBikes } = bikeSlice.actions;

export default bikeSlice.reducer;
