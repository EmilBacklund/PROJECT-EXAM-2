import StageTemplate from './StageTemplate';
import CustomInput from '../../components/FormComponents/CustomInput';

const Stage5 = () => {
  return (
    <div>
      <StageTemplate stageNumber={5} stageTitle={'Price'} />
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default Stage5;
