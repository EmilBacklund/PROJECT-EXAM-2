const TrendingCard = ({ flexDirection }) => {
  return (
    <div className={`mb-10 section-container flex flex-col ${flexDirection} md:gap-6 md:mb-20`}>
      <div className='aspect-video md:aspect-auto max-h-[400px] md:flex-1 w-full bg-white rounded-tl-[32px] rounded-br-[32px] rounded-tr-[8px] rounded-bl-[8px] overflow-hidden'>
        <img className='object-cover w-full h-full' src='/images/castleExample.png' />
      </div>
      <div className='flex flex-col gap-2 px-6 pt-2 md:flex-1 md:justify-between md:py-1 lg:py-2 md:px-2 lg:px-6'>
        <div className='flex flex-col gap-2 md:gap-6'>
          <div className='flex gap-2 items-end'>
            <img className='w-8 sm:w-auto' src='/images/star.svg' />
            <p className='text-2xl md:text-[40px] leading-[26px] md:leading-[42px] font-josefinsSans font-medium'>
              4.89
            </p>
          </div>
          <h3 className='font-bold lg:text-2xl'>Cederic Vandenberghe</h3>
          <p className='text-center lg:text-xl lg:leading-[30px]'>
            “…Welcome to the Enchanted Hilltop Castle, an exquisite blend of medieval charm and
            modern luxury, available exclusively for your dream vacation. Nestled amidst the verdant
            hills of a serene countryside, this majestic fortress provides the perfect escape to an
            enchanting world of opulence and splendor..…{' '}
          </p>
        </div>
        <div className='flex flex-col smallScreen:flex-row items-center  smallScreen:items-end justify-between mt-4 smallScreen:mt-0'>
          <p className='text-lg md:text-xl lg:text-2xl font-semibold font-josefinsSans  '>
            2576 kr /night
          </p>
          <div className='relative overflow-hidden w-full smallScreen:w-auto'>
            <button className='border after:overflow-hidden font-carena lg:text-xl border-textBlack leading-[42px] h-[42px] w-full smallScreen:w-auto smallScreen:px-[66px] rounded-tl-[24px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[24px] hover:bg-textBlack hover:text-background transition duration-500 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-textBlack before:-z-10 before:transition-transform before:duration-300 before:origin-center before:buttonCTAeffect before:scale-x-0  hover:before:-scale-x-100 before:rounded-tl-[4px] before:rounded-tr-[24px] before:rounded-bl-[24px] before:rounded-br-[4px]'>
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
