const TrendingCard = () => {
  return (
    <div>
      <div className='aspect-video w-full bg-white rounded-tl-[32px] rounded-br-[32px] rounded-tr-[8px] rounded-bl-[8px] overflow-hidden'>
        <img className=' object-cover w-full' src='/images/castleExample.png' />
      </div>
      <div className='flex flex-col gap-2 px-6 py-2'>
        <div className='flex gap-2 items-end'>
          <img className='w-8 sm:w-auto' src='/images/star.svg' />
          <p className='text-2xl md:text-[40px] leading-[26px] md:leading-[42px] font-josefinsSans font-medium'>
            4.89
          </p>
        </div>
        <h3 className='font-bold'>Cederic Vandenberghe</h3>
        <p className='text-center'>
          “…Welcome to the Enchanted Hilltop Castle, an exquisite blend of medieval charm and modern
          luxury, available exclusively for your dream vacation. Nestled amidst the verdant hills of
          a serene countryside, this majestic fortress provides the perfect escape to an enchanting
          world of opulence and splendor..…{' '}
        </p>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-bold'>2576 kr /night</p>
          <button className='border font-carena border-textBlack leading-[42px] h-[42px] px-[66px] rounded-tl-[24px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[24px]'>
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
