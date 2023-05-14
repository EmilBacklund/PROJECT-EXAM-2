import StageTemplate from './StageTemplate';
import useAmenities from '../../hooks/useAmenities';
import { useSelector, useDispatch } from 'react-redux';
import { updateStageData } from '../../store/modules/displayedVenueStageSlice';
import AmenityButton from './AmenityButton';

const Stage4 = () => {
  const { amenities, loading, error } = useAmenities();
  const stage4Data = useSelector(
    (state) => state.displayedVenueStage.stageData.stage4
  );
  const dispatch = useDispatch();

  console.log('stage4Data: ', stage4Data);

  const handleAmenityClick = (amenity) => {
    let updatedAmenities = [...stage4Data];
    const index = updatedAmenities.indexOf(amenity.amenity);
    if (index > -1) {
      updatedAmenities.splice(index, 1);
    } else {
      updatedAmenities.push(amenity.amenity);
    }
    dispatch(
      updateStageData({ stage: 4, data: updatedAmenities })
    );
  };

  const isActive = (amenity) =>
    stage4Data.includes(amenity);

  return (
    <div>
      <StageTemplate
        stageNumber={4}
        stageTitle={'Amenities'}
      />
      <div className='flex flex-col gap-4'></div>
      <h3 className='font-bold text-2xl'>
        What has your place to offer?
      </h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 mt-6'>
        {amenities &&
          amenities.map((amenity, index) => (
            <AmenityButton
              key={index}
              amenity={amenity}
              index={index}
              isActive={isActive(amenity.amenity)}
              handleAmenityClick={handleAmenityClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Stage4;
