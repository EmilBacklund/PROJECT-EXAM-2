const StageTemplate = ({ stageNumber, stageTitle }) => {
  return (
    <div className="flex items-center gap-2 justify-center mb-6">
      <div className="w-10 h-10 border-2 font-medium text-lg font-josefinsSans rounded-full text-center leading-10 border-primaryRed text-primaryRed">
        {stageNumber}
      </div>
      <h2>{stageTitle}</h2>
    </div>
  );
};

export default StageTemplate;
