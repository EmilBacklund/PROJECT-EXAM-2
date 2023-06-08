import axios from "axios";

const getAllVenue = async (dispatch) => {
  try {
    const response = await axios.get(
      `https://nf-api.onrender.com/api/v1/holidaze/venues?_bookings=true`
    );
    console.log("Response data from getVenue", response.data);
    return response.data;
  } catch (error) {
    console.error("Get venue failed:", error);
  }
};

export default getAllVenue;
