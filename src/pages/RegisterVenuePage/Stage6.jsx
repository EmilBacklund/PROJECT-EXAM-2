import StageTemplate from './StageTemplate';
import { FaPlusCircle } from 'react-icons/fa';
import AddImageModal from './AddImageModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Stage6 = () => {
  const [open, setOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const stageData = useSelector(
    (state) => state.displayedVenueStage.stageData.stage6
  );

  console.log(stageData.coverPhoto);

  const handleButtonClick = (button) => {
    setClickedButton(button);
    setOpen(true);
  };

  return (
    <div>
      <StageTemplate
        stageNumber={6}
        stageTitle={'Images'}
      />
      <div className='flex flex-col gap-4'>
        <div>
          <p className='text-2xl font-medium mb-2'>
            Cover Photo
          </p>
          <button
            onClick={() => handleButtonClick('coverPhoto')}
            type='button'
            className={`aspect-video group md:flex-1 relative block w-full rounded-lg border-2 border-dashed  p-12 text-center  focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 overflow-hidden`}
          >
            <>
              {' '}
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange ' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.coverPhoto !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.coverPhoto == null && (
                  <p>Add cover photo</p>
                )}
              </span>
            </>
            {stageData.coverPhoto !== null &&
              stageData.coverPhoto &&
              stageData.coverPhoto && (
                <img
                  className='absolute top-0 left-0 w-full h-full object-cover '
                  src={
                    stageData.coverPhoto !== null &&
                    stageData.coverPhoto &&
                    stageData.coverPhoto
                  }
                  alt=''
                />
              )}
            {stageData.coverPhoto !== null &&
              stageData.coverPhoto && (
                <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                  Edit
                </button>
              )}
          </button>
        </div>
        <div>
          <p className='text-2xl font-medium mb-2'>
            Additional Images
          </p>
          <div className='flex gap-4 flex-wrap'>
            <button
              onClick={() => handleButtonClick('photo1')}
              type='button'
              className='flex-1 group aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.photo1 !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.photo1 == null && (
                  <p>Add image</p>
                )}
              </span>
              {stageData.photo1 !== null &&
                stageData.photo1 &&
                stageData.photo1 && (
                  <img
                    className='absolute top-0 left-0 w-full h-full object-cover '
                    src={
                      stageData.photo1 !== null &&
                      stageData.photo1 &&
                      stageData.photo1
                    }
                    alt=''
                  />
                )}
              {stageData.photo1 !== null &&
                stageData.photo1 && (
                  <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                    Edit
                  </button>
                )}
            </button>
            <button
              onClick={() => handleButtonClick('photo2')}
              type='button'
              className='flex-1 group aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.photo2 !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.photo2 == null && (
                  <p>Add image</p>
                )}
              </span>
              {stageData.photo2 !== null &&
                stageData.photo2 &&
                stageData.photo2 && (
                  <img
                    className='absolute top-0 left-0 w-full h-full object-cover '
                    src={
                      stageData.photo2 !== null &&
                      stageData.photo2 &&
                      stageData.photo2
                    }
                    alt=''
                  />
                )}
              {stageData.photo2 !== null &&
                stageData.photo2 && (
                  <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                    Edit
                  </button>
                )}
            </button>
          </div>
        </div>
        <div>
          <div className='flex gap-4 flex-wrap'>
            <button
              onClick={() => handleButtonClick('photo3')}
              type='button'
              className='flex-1 group aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.photo3 !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.photo3 == null && (
                  <p>Add image</p>
                )}
              </span>
              {stageData.photo3 !== null &&
                stageData.photo3 &&
                stageData.photo3 && (
                  <img
                    className='absolute top-0 left-0 w-full h-full object-cover '
                    src={
                      stageData.photo3 !== null &&
                      stageData.photo3 &&
                      stageData.photo3
                    }
                    alt=''
                  />
                )}
              {stageData.photo3 !== null &&
                stageData.photo3 && (
                  <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                    Edit
                  </button>
                )}
            </button>
            <button
              onClick={() => handleButtonClick('photo4')}
              type='button'
              className='flex-1 group aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.photo4 !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.photo4 == null && (
                  <p>Add image</p>
                )}
              </span>
              {stageData.photo4 !== null &&
                stageData.photo4 &&
                stageData.photo4 && (
                  <img
                    className='absolute top-0 left-0 w-full h-full object-cover '
                    src={
                      stageData.photo4 !== null &&
                      stageData.photo4 &&
                      stageData.photo4
                    }
                    alt=''
                  />
                )}
              {stageData.photo4 !== null &&
                stageData.photo4 && (
                  <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                    Edit
                  </button>
                )}
            </button>
          </div>
        </div>
        <div>
          <div className='flex gap-4 flex-wrap'>
            <button
              onClick={() => handleButtonClick('photo5')}
              type='button'
              className='flex-1 group aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.photo5 !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.photo5 == null && (
                  <p>Add image</p>
                )}
              </span>
              {stageData.photo5 !== null &&
                stageData.photo5 &&
                stageData.photo5 && (
                  <img
                    className='absolute top-0 left-0 w-full h-full object-cover '
                    src={
                      stageData.photo5 !== null &&
                      stageData.photo5 &&
                      stageData.photo5
                    }
                    alt=''
                  />
                )}
              {stageData.photo5 !== null &&
                stageData.photo5 && (
                  <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                    Edit
                  </button>
                )}
            </button>
            <button
              onClick={() => handleButtonClick('photo6')}
              type='button'
              className='flex-1 group aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.photo6 !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.photo6 == null && (
                  <p>Add image</p>
                )}
              </span>
              {stageData.photo6 !== null &&
                stageData.photo6 &&
                stageData.photo6 && (
                  <img
                    className='absolute top-0 left-0 w-full h-full object-cover '
                    src={
                      stageData.photo6 !== null &&
                      stageData.photo6 &&
                      stageData.photo6
                    }
                    alt=''
                  />
                )}
              {stageData.photo6 !== null &&
                stageData.photo6 && (
                  <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                    Edit
                  </button>
                )}
            </button>
          </div>
        </div>
        <div>
          <div className='flex gap-4 flex-wrap'>
            <button
              onClick={() => handleButtonClick('photo7')}
              type='button'
              className='flex-1 group aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.photo7 !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.photo7 == null && (
                  <p>Add image</p>
                )}
              </span>
              {stageData.photo7 !== null &&
                stageData.photo7 &&
                stageData.photo7 && (
                  <img
                    className='absolute top-0 left-0 w-full h-full object-cover '
                    src={
                      stageData.photo7 !== null &&
                      stageData.photo7 &&
                      stageData.photo7
                    }
                    alt=''
                  />
                )}
              {stageData.photo7 !== null &&
                stageData.photo7 && (
                  <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                    Edit
                  </button>
                )}
            </button>
            <button
              onClick={() => handleButtonClick('photo8')}
              type='button'
              className='flex-1 group aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                {stageData.photo8 !== null && (
                  <p>
                    The URL to your image is probably broken
                  </p>
                )}
                {stageData.photo8 == null && (
                  <p>Add image</p>
                )}
              </span>
              {stageData.photo8 !== null &&
                stageData.photo8 &&
                stageData.photo8 && (
                  <img
                    className='absolute top-0 left-0 w-full h-full object-cover '
                    src={
                      stageData.photo8 !== null &&
                      stageData.photo8 &&
                      stageData.photo8
                    }
                    alt=''
                  />
                )}
              {stageData.photo8 !== null &&
                stageData.photo8 && (
                  <button className='absolute group-hover:bg-[#e85159] bg-primaryRed text-white z-10 top-3 right-5 px-4 py-1 rounded font-semibold transition-colors duration-300'>
                    Edit
                  </button>
                )}
            </button>
          </div>
        </div>
      </div>
      <AddImageModal
        successMessage='Hooray! 😄 Image upload complete!'
        imageRemovedMessage='Image removed 🙂'
        open={open}
        setOpen={setOpen}
        clickedButton={clickedButton}
      />
    </div>
  );
};

export default Stage6;
