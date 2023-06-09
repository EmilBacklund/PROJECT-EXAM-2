import axios from "axios";
import { getItem } from "../utils/storage";

const getAllUserVenues = async (dispatch) => {
  const { name } = getItem("user");
  const token = getItem("token");

  try {
    const response = await axios.get(
      `https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}/venues`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Get venue failed:", error);
  }
};

export default getAllUserVenues;
