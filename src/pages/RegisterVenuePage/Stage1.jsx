import StageTemplate from './StageTemplate';
import CustomInput from '../../components/FormComponents/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateStage1Data } from '../../store/modules/displayedVenueStageSlice';

const Stage1 = () => {
  const dispatch = useDispatch();
  const stage1Data = useSelector(
    (state) => state.displayedVenueStage.stage1Data
  );

  console.log(stage1Data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...stage1Data,
      [name]: value,
    };
    dispatch(updateStage1Data(updatedData));
  };

  return (
    <div>
      <StageTemplate stageNumber={1} stageTitle={'Essential Information'} />
      <div className="flex flex-col gap-4">
        <CustomInput
          onChange={handleChange}
          labelName="Square Meter (m2)"
          name="m2"
          type="text"
          value={stage1Data.m2}
        />
        <CustomInput
          onChange={handleChange}
          labelName="Beds"
          name="beds"
          type="number"
          value={stage1Data.beds}
        />
        <CustomInput
          onChange={handleChange}
          labelName="Bathrooms"
          name="bathrooms"
          type="number"
          value={stage1Data.bathrooms}
        />
        <CustomInput
          onChange={handleChange}
          labelName="Max guests"
          name="guests"
          type="number"
          value={stage1Data.guests}
        />
      </div>
    </div>
  );
};

export default Stage1;
