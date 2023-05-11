import StageTemplate from './StageTemplate';
import { FaPlusCircle } from 'react-icons/fa';
import AddImageModal from './AddImageModal';
import { useState } from 'react';

const Stage6 = () => {
  const [open, setOpen] = useState(false);

  const openCoverPhotoModal = () => {
    setOpen(true);
    setPhotoSlot('coverPhoto');
  };

  const openPhotoModal = (index) => {
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
            onClick={() => openCoverPhotoModal()}
            type='button'
            className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
          >
            <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
            <span className='mt-2 block text-sm font-semibold text-gray-900'>
              Add cover photo
            </span>
          </button>
        </div>
        <div>
          <p className='text-2xl font-medium mb-2'>
            Additional Images
          </p>
          <div className='flex gap-6'>
            <button
              onClick={() => openPhotoModal()}
              type='button'
              className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                Add Image
              </span>
            </button>
            <button
              onClick={() => openPhotoModal()}
              type='button'
              className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                Add Image
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className='flex gap-4'>
            <button
              onClick={() => openPhotoModal()}
              type='button'
              className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                Add Image
              </span>
            </button>
            <button
              onClick={() => openPhotoModal()}
              type='button'
              className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                Add Image
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className='flex gap-4'>
            <button
              onClick={() => openPhotoModal()}
              type='button'
              className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                Add Image
              </span>
            </button>
            <button
              onClick={() => openPhotoModal()}
              type='button'
              className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                Add Image
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className='flex gap-4'>
            <button
              onClick={() => openPhotoModal()}
              type='button'
              className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                Add Image
              </span>
            </button>
            <button
              onClick={() => openPhotoModal()}
              type='button'
              className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
            >
              <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
              <span className='mt-2 block text-sm font-semibold text-gray-900'>
                Add Image
              </span>
            </button>
          </div>
        </div>
      </div>
      <AddImageModal
        successMessage='Hooray! 😄 Image upload complete!'
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Stage6;
