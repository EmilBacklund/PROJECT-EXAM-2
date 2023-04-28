const MainFormComponent = ({ children }) => {
  return (
    <div className='absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 content-container w-full z-10 h-full max-w-[1440px]'>
      <div className='relative h-full w-full '>
        <form className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
          <div className='md:w-full bg-black md:bg-opacity-30 bg-opacity-40 text-white'>
            <div className='max-w-4xl mx-auto py-2 md:py-10 px-2 sm:px-4 md:0'>
              <h1 className='text-2xl md:text-4xl font-semibold mb-2'>Find Your Perfect Stay!</h1>
              <p className='text-sm md:text-base'>
                At Holidaze, you can find thousands of cottages, houses, and apartments that you can
                rent directly from the owners - without any hassle. Renting is easy: simply locate a
                property using our search function, and then contact the owner directly for
                inquiries and booking.
              </p>
            </div>
          </div>
          {children}
        </form>
      </div>
    </div>
  );
};

export default MainFormComponent;
