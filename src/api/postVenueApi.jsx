import axios from 'axios';

const postVenue = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/get/venue/register/1',
        data
      );
      console.log('Response data from Venue post', response.data);
      resolve(response.data);
    } catch (error) {
      console.error('Error:', error.response.status);
      reject(error);
    }
  });
};

export default postVenue;
