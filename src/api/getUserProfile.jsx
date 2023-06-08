import axios from "axios";
import { getItem } from "../utils/storage";

const getUserProfile = (param) => {
  const token = getItem("token");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://nf-api.onrender.com/api/v1/holidaze/profiles/${param}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      resolve(response.data);
    } catch (error) {
      console.error("Error:", error.response.status);
      reject(error);
    }
  });
};

export default getUserProfile;
