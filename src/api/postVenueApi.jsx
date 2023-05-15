import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const postVenue = () => {
  const stageData = useSelector((state) => state.displayedVenueStage.stageData);
  console.log(stageData);

  const postData = async () => {
    try {
      const response = await axios.post('http://example.com', stageData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  postData();
};

export default postVenue;
