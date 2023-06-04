import StageTemplate from "./StageTemplate";
import { useSelector, useDispatch } from "react-redux";
import { updateStageData } from "../../store/modules/displayedVenueStageSlice";
import AmenityButton from "./AmenityButton";
import amenityImages from "../../utils/amenityImages";

const Stage4 = () => {
  const stage4Data = useSelector(
    (state) =>
      state.displayedVenueStage.stageData?.stage4 ||
      Object.keys(amenityImages).reduce(
        (obj, amenity) => ({ ...obj, [amenity]: false }),
        {}
      )
  );
  const dispatch = useDispatch();

  const handleAmenityClick = (amenity) => {
    const updatedAmenities = { ...stage4Data, [amenity]: !stage4Data[amenity] };
    dispatch(updateStageData({ stage: 4, data: updatedAmenities }));
  };

  const isActive = (amenity) => stage4Data[amenity];

  return (
    <div>
      <StageTemplate stageNumber={4} stageTitle={"Amenities"} />
      <div className="flex flex-col gap-4"></div>
      <h3 className="text-2xl font-bold">What has your place to offer?</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {Object.entries(amenityImages).map(([amenity, imageUrl], index) => (
          <AmenityButton
            key={index}
            amenity={{ amenity, imageUrl }}
            index={index}
            isActive={isActive(amenity)}
            handleAmenityClick={() => handleAmenityClick(amenity)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage4;
