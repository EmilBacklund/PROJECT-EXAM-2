import { useDispatch, useSelector } from 'react-redux';
import RegisterProgression from './RegisterProgression';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';
import Stage5 from './Stage5';
import Stage6 from './Stage6';
import { SecondaryBtn, PrimaryBtn } from '../../components/StyledButtons';
import {
  incrementStage,
  decrementStage,
} from '../../store/modules/displayedVenueStageSlice';

const RegisterVenue = () => {
  const currentStage = useSelector((state) => state.displayedVenueStage.stage);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const renderStage = () => {
    switch (currentStage) {
      case 1:
        return <Stage1 />;
      case 2:
        return <Stage2 />;
      case 3:
        return <Stage3 />;
      case 4:
        return <Stage4 />;
      case 5:
        return <Stage5 />;
      case 6:
        return <Stage6 />;
      default:
        return <Stage1 />;
    }
  };

  return (
    <div className="section-container gap-6 flex flex-col justify-between min-h-[calc(100vh-179.18px)] md:min-h-[calc(100vh-111.99px)]">
      <div>
        <div className="sm:flex sm:justify-center">
          <RegisterProgression />
          <form onSubmit={handleSubmit} className="mb-6">
            {renderStage()}
          </form>
        </div>
      </div>
      <div
        className={`${
          currentStage !== 0 ? 'justify-between' : 'justify-end'
        } flex  mb-6`}
      >
        {currentStage !== 0 && (
          <button
            onClick={() => {
              dispatch(decrementStage());
            }}
            className="underline text-textBlack font-semibold rounded-md px-8 hover:bg-gray-200"
          >
            Back
          </button>
        )}

        <SecondaryBtn
          width="px-8"
          name={currentStage <= 5 ? 'Next' : 'submit'}
          onClick={
            currentStage <= 5
              ? () => {
                  dispatch(incrementStage());
                }
              : null
            //!Instead of null, make a POST request here when API is up
          }
        />
      </div>
    </div>
  );
};

export default RegisterVenue;
