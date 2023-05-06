import StageTemplate from './StageTemplate';
import CustomInput from '../../components/FormComponents/CustomInput';

const Stage2 = () => {
  return (
    <div>
      <StageTemplate stageNumber={2} stageTitle={'Title and Description'} />
      <div className="flex flex-col gap-4">
        <CustomInput labelName="Title" name="title" type="text" />
        <CustomInput labelName="Description" name="description" type="text" />
      </div>
    </div>
  );
};

export default Stage2;
