const Stage0 = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center h-full w-full flex-grow mt-0 sm:mt-10 gap-0 sm:gap-20'>
      <div className='sm:flex-1'>
        <h1 className='font-bold text-3xl lg:text-5xl mt-20 sm:mt-0 mb-20 sm:mb-0'>
          Join the Holidaze family
          <br /> - start hosting.
        </h1>
      </div>
      <div className='sm:flex-1 max-w-lg'>
        <h3 className='font-semibold mb-4 text-xl text-gray-600'>
          Six quick steps to becoming a Holidaze host.
        </h3>
        <ul className='flex flex-col gap-2'>
          <div className='flex justify-between items-center py-4 border-b'>
            <div>
              <li>
                <span className='font-bold'>Step 1</span>:
                Essential Information
              </li>
              <li>
                <span className='font-bold'>Step 2</span>:
                Title and Description
              </li>
            </div>
            <div>
              <img
                src='/images/registerIcons/info.png'
                alt=''
              />
            </div>
          </div>
          <div className='flex justify-between border-b items-center py-4'>
            <li className='flex flex-col'>
              <span className='font-bold'>Step 3:</span>
              <span>Location</span>
            </li>
            <img
              src='/images/registerIcons/map.png'
              alt=''
            />
          </div>
          <div className='flex justify-between border-b items-center py-4'>
            <li className='flex flex-col'>
              <span className='font-bold'> Step 4:</span>
              <span>Amenities</span>
            </li>
            <img
              src='/images/registerIcons/amenities.png'
              alt=''
            />
          </div>
          <div className='flex justify-between border-b items-center py-4'>
            <li className='flex flex-col'>
              <span className='font-bold'>Step 5:</span>
              <span>Pricing</span>
            </li>
            <img
              src='/images/registerIcons/best-price.png'
              alt=''
            />
          </div>
          <div className='flex justify-between items-center py-4'>
            <li className='flex flex-col'>
              <span className='font-bold'>Step 6:</span>
              <span>Images</span>
            </li>
            <img
              src='/images/registerIcons/gallery.png'
              alt=''
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Stage0;
