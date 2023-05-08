import StageTemplate from './StageTemplate';
import CustomInput from '../../components/FormComponents/CustomInput';

const Stage2 = () => {
  return (
    <div>
      <StageTemplate stageNumber={2} stageTitle={'Title and Description'} />
      <div className="flex flex-col gap-4">
        <CustomInput labelName="Title" name="title" type="text" />
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Description *:
        </label>
        <textarea
          name="description"
          className="block shadow-sm indent-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 
          ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
          focus:ring-inset focus:ring-secondaryOrange sm:text-sm sm:leading-6"
          rows="2"
        />
      </div>
    </div>
  );
};

export default Stage2;
