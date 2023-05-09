import StageTemplate from './StageTemplate';
import useAmenities from '../../hooks/useAmenities';
import amenityImages from '../../utils/amenityImages';

const Stage4 = () => {
  const { amenities, loading, error } = useAmenities();

  console.log(amenityImages);

  return (
    <div>
      <StageTemplate stageNumber={4} stageTitle={'Amenities'} />
      <div className="flex flex-col gap-4"></div>
      <h3 className="font-bold text-2xl">What has your place to offer?</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-6">
        {amenities &&
          amenities.map((amenity, index) => (
            <button
              className="bg-white flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition duration-300 hover:border-secondaryOrange hover:ring-2 hover:ring-secondaryOrange"
              key={index}
            >
              <img
                className="w-7"
                src={amenityImages[amenity.amenity]}
                alt={amenity.amenity}
              />
              <p className="font-semibold text-lg">{amenity.amenity}</p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Stage4;
