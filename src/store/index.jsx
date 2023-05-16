import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import headerImageSlice from './modules/headerImageSlice';
import displayedHomepageViewSlice from './modules/displayedHomepageViewSlice';
import displayedVenueStageSlice from './modules/displayedVenueStageSlice';
import displayedDashboardViewSlice from './modules/displayedDashboardViewSlice';
import carouselIndexSlice from './modules/carouselIndexSlice';

const reducer = combineReducers({
  headerImage: headerImageSlice,
  displayedHomepageView: displayedHomepageViewSlice,
  displayedVenueStage: displayedVenueStageSlice,
  displayedDashboardView: displayedDashboardViewSlice,
  carouselIndex: carouselIndexSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['displayedVenueStage'], // Only persist displayedVenueStage slice
};

const persistedReducer = persistReducer(persistConfig, reducer);

const index = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(index);
export default index;
