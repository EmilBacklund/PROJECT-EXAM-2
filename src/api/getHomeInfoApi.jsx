import axios from "axios";

const getHomeInfoApi = async () => {
  try {
    const response = await axios.get(
      `https://nf-api.onrender.com/api/v1/holidaze/venues?_bookings=true`
    );
    return response.data;
  } catch (error) {
    console.error("Get venue failed:", error);
  }
};

export default getHomeInfoApi;
