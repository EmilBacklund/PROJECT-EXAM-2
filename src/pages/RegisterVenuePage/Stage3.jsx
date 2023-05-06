import StageTemplate from './StageTemplate';
import CustomInput from '../../components/FormComponents/CustomInput';

const Stage3 = () => {
  return (
    <div>
      <StageTemplate stageNumber={3} stageTitle={'Location'} />
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default Stage3;
