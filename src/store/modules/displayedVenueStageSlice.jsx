import { createSlice } from '@reduxjs/toolkit';

const displayedVenueStageSlice = createSlice({
  name: 'displayedVenueStage',
  initialState: {
    stage: 1,
    stage1Data: {},
    stage2Data: {},
    stage3Data: {},
  },
  reducers: {
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    incrementStage: (state) => {
      state.stage = state.stage + 1;
    },
    decrementStage: (state) => {
      state.stage = state.stage - 1;
    },
    updateStage1Data: (state, action) => {
      state.stage1Data = action.payload;
    },
  },
});

export const { setStage, incrementStage, decrementStage, updateStage1Data } =
  displayedVenueStageSlice.actions;
export default displayedVenueStageSlice.reducer;
