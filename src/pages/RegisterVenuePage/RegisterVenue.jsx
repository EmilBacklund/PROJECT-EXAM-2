import { useDispatch, useSelector } from 'react-redux';
import RegisterProgression from './RegisterProgression';
import Stage1 from './Stage1';
import Stage2 from './Stage2';

const RegisterVenue = () => {
  const currentStage = useSelector((state) => state.displayedVenueStage.stage);
  const dispatch = useDispatch();
  console.log(currentStage);

  const renderStage = () => {
    switch (currentStage) {
      case 1:
        return <Stage1 />;
      case 2:
        return <Stage2 />;
      // Add more stages here
      default:
        return <Stage1 />;
    }
  };

  return (
    <div className="section-container sm:flex sm:justify-center">
      <RegisterProgression />
      <form>{renderStage()}</form>
    </div>
  );
};

export default RegisterVenue;
