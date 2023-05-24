import { ClimbingBoxLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="fixed inset-0 w-full h-screen z-50 overflow-hidden bg-gray-500 opacity-80 flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <ClimbingBoxLoader
          color={'#EB737A'}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default Loader;
