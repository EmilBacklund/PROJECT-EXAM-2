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

  console.log(stage4Data);

  const handleAmenityClick = (amenity) => {
    const updatedAmenities = { ...stage4Data };
    if (updatedAmenities[amenity.amenity]) {
      delete updatedAmenities[amenity.amenity];
    } else {
      updatedAmenities[amenity.amenity] = {
        id: amenity.id,
        amenity: amenity.amenity,
      };
    }
    dispatch(
      updateStageData({ stage: 4, data: updatedAmenities })
    );
  };

  const isActive = (amenity) =>
    stage4Data.hasOwnProperty(amenity);

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
