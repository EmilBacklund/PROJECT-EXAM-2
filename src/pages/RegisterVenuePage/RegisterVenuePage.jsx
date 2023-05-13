import { useDispatch, useSelector } from 'react-redux';
import RegisterProgression from './RegisterProgression';
import { SecondaryBtn } from '../../components/StyledButtons';
import {
  incrementStage,
  decrementStage,
} from '../../store/modules/displayedVenueStageSlice';
import { Outlet, useNavigate } from 'react-router-dom';
import Stage0 from './Stage0';

const RegisterVenue = () => {
  const navigate = useNavigate();
  const currentStage = useSelector(
    (state) => state.displayedVenueStage.stage
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const stageToPath = {
    1: 'essential-information',
    2: 'title-and-description',
    3: 'location',
    4: 'amenities',
    5: 'pricing',
    6: 'images',
  };

  console.log(currentStage);

  const increment = () => {
    dispatch(incrementStage());
    navigate(
      `/registerVenue/${stageToPath[currentStage + 1]}`
    );
  };

  const decrement = () => {
    dispatch(decrementStage());
    if (currentStage - 1 === 0) {
      navigate(`/registerVenue`);
    } else {
      navigate(
        `/registerVenue/${stageToPath[currentStage - 1]}`
      );
    }
  };

  const renderButtonName = () => {
    switch (currentStage) {
      case 0:
        return 'Begin';
      case 6:
        return 'Submit';
      default:
        return 'Next';
    }
  };

  return (
    <div className='relative section-container gap-6 flex flex-col justify-between min-h-[calc(100vh-179.18px)] md:min-h-[calc(100vh-111.99px)]'>
      {currentStage === 0 && <Stage0 />}
      <div>
        <div className='sm:flex sm:justify-center sm:gap-20 sm:mt-10'>
          {currentStage > 0 && (
            <div className='sm:mt-20 '>
              <RegisterProgression />
            </div>
          )}
          <form
            className='sm:flex-1 max-w-3xl'
            onSubmit={handleSubmit}
          >
            <Outlet />
          </form>
        </div>
      </div>
      <div
        className={`${
          currentStage !== 0
            ? 'justify-between'
            : 'justify-end'
        } flex  mb-6`}
      >
        {currentStage !== 0 && (
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className='underline text-textBlack font-semibold rounded-md px-8 hover:bg-gray-200'
          >
            Back
          </button>
        )}

        <SecondaryBtn
          width='px-8'
          name={renderButtonName()}
          onClick={
            currentStage <= 5
              ? () => {
                  dispatch(increment());
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
