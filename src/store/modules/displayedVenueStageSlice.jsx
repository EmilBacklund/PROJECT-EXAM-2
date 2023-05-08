import { createSlice } from '@reduxjs/toolkit';

const displayedVenueStageSlice = createSlice({
  name: 'displayedVenueStage',
  initialState: {
    stage: 1,
    stageData: {
      stage1: {},
      stage2: {},
      stage3: {},
      stage4: {},
      stage5: {},
      stage6: {},
    },
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
    updateStageData: (state, action) => {
      const { stage, data } = action.payload;
      state.stageData[`stage${stage}`] = data;
    },
  },
});

export const { setStage, incrementStage, decrementStage, updateStageData } =
  displayedVenueStageSlice.actions;
export default displayedVenueStageSlice.reducer;
