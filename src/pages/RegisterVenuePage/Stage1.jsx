import StageTemplate from './StageTemplate';
import CustomInput from '../../components/FormComponents/CustomInput';

const Stage1 = () => {
  return (
    <div>
      <StageTemplate stageNumber={1} stageTitle={'Essential Information'} />
      <div className="flex flex-col gap-4">
        <CustomInput labelName="Square Meter (m2)" name="m2" type="text" />
        <CustomInput labelName="Beds" name="beds" type="text" />
        <CustomInput labelName="Bathrooms" name="bathrooms" type="text" />
        <CustomInput labelName="Max guests" name="guests" type="text" />
      </div>
    </div>
  );
};

export default Stage1;
