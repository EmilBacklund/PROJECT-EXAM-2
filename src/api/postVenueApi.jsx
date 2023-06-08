import axios from "axios";
import { getItem } from "../utils/storage";

const postVenue = (data) => {
  const token = getItem("token");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `https://nf-api.onrender.com/api/v1/holidaze/venues`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      resolve(response.data);
    } catch (error) {
      console.error("Error:", error.response.status);
      reject(error);
    }
  });
};

export default postVenue;
