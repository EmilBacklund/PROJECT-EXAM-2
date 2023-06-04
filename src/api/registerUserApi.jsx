import axios from "axios";

const registerUser = (data, request) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: request,
        url: `https://nf-api.onrender.com/api/v1/holidaze/auth/register`,
        data: data,
      });
      console.log("Response data from User post", response.data);
      resolve(response.data);
    } catch (error) {
      console.error("Error:", error.response?.status);
      reject(error);
    }
  });
};

export default registerUser;
