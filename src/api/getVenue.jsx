import axios from "axios";
import { setLoadingState } from "../store/modules/loaderSlice";
import { getItem } from "../utils/storage";

const getVenue = (venueId, isAuthenticated) => async (dispatch) => {
  const token = getItem("token");

  dispatch(setLoadingState(true));
  try {
    let config = {};
    if (isAuthenticated) {
      config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    }
    const response = await axios.get(
      `https://nf-api.onrender.com/api/v1/holidaze/venues/${venueId}?_bookings=true?_owner=true`,
      config
    );
    dispatch(setLoadingState(false));
    return response.data;
  } catch (error) {
    dispatch(setLoadingState(false));
    console.error("Get venue failed:", error);
  }
};

export default getVenue;
