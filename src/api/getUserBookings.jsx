import axios from "axios";
import { setLoadingState } from "../store/modules/loaderSlice";
import { getItem } from "../utils/storage";

const getUserBookings = () => async (dispatch) => {
  const user = getItem("user");
  const token = getItem("token");

  dispatch(setLoadingState(true));
  try {
    const response = await axios.get(
      `https://nf-api.onrender.com/api/v1/holidaze/profiles/${user.name}/bookings?_venue=true`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(setLoadingState(false));
    return response.data;
  } catch (error) {
    dispatch(setLoadingState(false));
    console.error("Get venue failed:", error);
  }
};

export default getUserBookings;
