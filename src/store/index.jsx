import { configureStore, combineReducers } from '@reduxjs/toolkit';
import headerImageSlice from './modules/headerImageSlice';
import displayedHomepageViewSlice from './modules/displayedHomepageViewSlice';
import displayedVenueStageSlice from './modules/displayedVenueStageSlice';

const reducer = combineReducers({
  headerImage: headerImageSlice,
  displayedHomepageView: displayedHomepageViewSlice,
  displayedVenueStage: displayedVenueStageSlice,
});

console.log('Reducer ', reducer);

const index = configureStore({
  reducer,
});

export default index;
