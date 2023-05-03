import { configureStore, combineReducers } from '@reduxjs/toolkit';
import headerImageSlice from './modules/headerImageSlice';
import displayedHomepageViewSlice from './modules/displayedHomepageViewSlice';

const reducer = combineReducers({
  headerImage: headerImageSlice,
  displayedHomepageView: displayedHomepageViewSlice,
});

const index = configureStore({
  reducer,
});

export default index;
