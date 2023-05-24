import axios from 'axios';
import { setLoadingState } from '../store/modules/loaderSlice';

const getVenue = (venueId) => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await axios.get(
      `http://localhost:8080/get/venue/${venueId}`
    );
    console.log('Response data from getVenue', response.data);
    dispatch(setLoadingState(false));
    return response.data;
  } catch (error) {
    dispatch(setLoadingState(false));
    console.error('Get venue failed:', error);
  }
};

export default getVenue;
