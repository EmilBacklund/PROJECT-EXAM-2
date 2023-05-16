import axios from 'axios';

const registerUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/get/user/register',
        data
      );
      console.log('Response data from User post', response.data);
      resolve(response.data);
    } catch (error) {
      console.error('Error:', error.response.status);
      reject(error);
    }
  });
};

export default registerUser;
