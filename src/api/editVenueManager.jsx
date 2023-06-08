import axios from "axios";
import { getItem } from "../utils/storage";

const editVenueManager = async (body, user) => {
  const token = getItem("token");

  try {
    const response = await axios.put(
      `https://nf-api.onrender.com/api/v1/holidaze/profiles/${user}`,
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Edit avatar failed: ", error);
    throw error;
  }
};

export default editVenueManager;
