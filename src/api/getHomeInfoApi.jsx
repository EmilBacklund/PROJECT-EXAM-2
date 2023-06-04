import axios from "axios";

const getHomeInfoApi = async () => {
  try {
    const response = await axios.get(`https://holidays.imats.se/get/home`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response data from getHomeInfoApi", response.data);
    return response.data;
  } catch (error) {
    console.error("Get venue failed:", error);
  }
};

export default getHomeInfoApi;
