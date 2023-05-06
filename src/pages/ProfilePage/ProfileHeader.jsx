const ProfileHeader = () => {
  return (
    <>
      <div className='section-container'>
        <h1 className='font-carena text-2xl mt-6 md:mt-10 md:text-[32px] leading-[24px] md:leading-[32px]'>
          Gustav Henriksson
        </h1>
        <div className='gradient-divider w-full h-[1px] mb-2'></div>
      </div>
      <div className='relative w-full min-h-[207px] max-h-[490px] h-full overflow-hidden aspect-video'>
        <div className='pt-4 pb-[48px] md:pb-[57px] section-container h-full relative'>
          <div className='aspect-square h-full max-h-[295px]'>
            <img
              className='w-[112px] h-[112px] rounded profileSmallScreen:rounded-none profileSmallScreen:w-full profileSmallScreen:h-full object-cover '
              src='/images/profileTest2.png'
              alt=''
            />
          </div>
          <button className='h-[33px] md:h-[42px] bg-secondaryOrange rounded-lg text-white font-semibold text-sm md:text-base transition absolute bottom-0 right-0 mr-6 md:mr-0 mb-[48px] md:mb-[57px]  px-4'>
            Send Message
          </button>
          <div className='gradientbg absolute right-0 top-0 mt-4 mr-6 md:mr-0 py-2 md:py-4 px-2 md:px-20 smallScreen:px-4 text-center'>
            <p className='font-semibold text-sm md:text-xl'>
              <span className='md:hidden'>Avg.</span>
              <span className='hidden md:inline-block'>Average</span> venue rating
            </p>
            <div className='flex items-center gap-2'>
              <img className='w-6 md:w-auto' src='/images/profileStar2.svg' alt='' />
              <p className='font-josefinsSans text-lg md:text-[40px] font-medium'>4.22</p>
              <p className='font-medium text-sm leading-[14px] md:text-xl md:leading-[20px]'>
                (27 reviews)
              </p>
            </div>
          </div>
        </div>
        <img
          className='absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover -z-10'
          src='/images/headerbg.png'
          alt=''
        />
      </div>
    </>
  );
};

export default ProfileHeader;
