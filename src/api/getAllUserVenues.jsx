import axios from "axios";
import { getItem } from "../utils/storage";

const getAllUserVenues = async (dispatch) => {
  const { id } = getItem("user");

  try {
    const response = await axios.get(
      `http://localhost:8080/get/venue/owner/${id}`
    );
    console.log("Response data from getVenue", response.data);
    return response.data;
  } catch (error) {
    console.error("Get venue failed:", error);
  }
};

export default getAllUserVenues;
