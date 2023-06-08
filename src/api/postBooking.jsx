import axios from "axios";
import { getItem } from "../utils/storage";

const postBooking = (body) => {
  const token = getItem("token");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `https://nf-api.onrender.com/api/v1/holidaze/bookings`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      resolve(response.data);
    } catch (error) {
      console.error("Error:", error.response.status);
      reject(error);
    }
  });
};

export default postBooking;
