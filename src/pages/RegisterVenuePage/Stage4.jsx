import StageTemplate from './StageTemplate';
import CustomInput from '../../components/FormComponents/CustomInput';

const Stage4 = () => {
  return (
    <div>
      <StageTemplate stageNumber={4} stageTitle={'Amenities'} />
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default Stage4;
