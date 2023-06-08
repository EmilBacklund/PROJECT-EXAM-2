import axios from "axios";

const registerUser = (data, request) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: request,
        url: `https://nf-api.onrender.com/api/v1/holidaze/auth/register`,
        data: data,
      });
      resolve(response.data);
    } catch (error) {
      console.error("Error:", error.response?.status);
      reject(error);
    }
  });
};

export default registerUser;
