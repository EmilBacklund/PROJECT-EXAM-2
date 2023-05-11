import StageTemplate from './StageTemplate';
import { FaPlusCircle } from 'react-icons/fa';
import AddImageModal from './AddImageModal';
import { useState } from 'react';

const Stage6 = () => {
  const [open, setOpen] = useState(false);

  
  return (
    <div>
      <StageTemplate stageNumber={6} stageTitle={'Images'} />
      <div className="flex flex-col gap-4">
        <div>
          <p className='text-2xl font-medium mb-2'>Cover Photo</p>
          <button
            onClick={() => setOpen(true)}
            type='button'
            className='aspect-video md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 '
          >
          <FaPlusCircle className='mx-auto h-12 w-12 text-secondaryOrange' />
            <span className='mt-2 block text-sm font-semibold text-gray-900'>
              Add cover photo
            </span>
          </button>
        </div>
      </div>
      <AddImageModal open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Stage6;
