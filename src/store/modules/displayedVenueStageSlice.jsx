import { createSlice } from '@reduxjs/toolkit';

const displayedVenueStageSlice = createSlice({
  name: 'displayedVenueStage',
  initialState: {
    stage: 1,
  },
  reducers: {
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    incrementStage: (state) => {
      state.stage + 1;
    },
    decrementStage: (state) => {
      state.stage + 1;
    },
  },
});

export const { setStage } = displayedVenueStageSlice.actions;
export default displayedVenueStageSlice.reducer;
