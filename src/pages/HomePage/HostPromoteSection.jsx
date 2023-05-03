const HostPromoteSection = () => {
  return (
    <div className='section-container'>
      <h2 className='text-center md:text-start'>Transform Your Space into a Profitable Stay</h2>
      <div className='flex justify-between gap-6 md:gap-10 md:flex-row flex-col'>
        <div className='flex-1'>
          <video
            className='w-full md:h-[360px] h-[270px] object-cover overflow-hidden md:mb-2'
            autoPlay
            muted
            loop
          >
            <source src='/videos/beachHouse.mp4' type='video/mp4' />
            Your browser does not support the video tag. <br />
            Video by Videographer Shiyaz:
            https://www.pexels.com/video/aerial-view-of-a-maldivesbeach-resort-4069480/.
          </video>
          <h3 className='text-lg md:text-2xl font-semibold mb-4 md:mb-6'>Becoming a Host</h3>
          <p className='md:text-lg'>
            Key benefits: Highlight the advantages of becoming a host on your platform, such as
            flexible hosting options, secure payments, and user-friendly tools for managing
            bookings.
          </p>
        </div>
        <div className='flex-1'>
          <img
            className='w-full md:h-[360px] h-[270px] object-cover md:mb-2'
            src='/images/richman.webp'
            alt='Photo by <a href="https://unsplash.com/pt-br/@emrealiriz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emre Alırız</a> on <a href="https://unsplash.com/photos/2rhz3Nuq12c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              '
          />
          <h3 className='text-lg md:text-2xl font-semibold mb-4 md:mb-6'>Testomonials from Host</h3>
          <p className='md:text-lg'>
            Share real-life experiences from successful hosts, demonstrating the value and support
            your platform provides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostPromoteSection;
