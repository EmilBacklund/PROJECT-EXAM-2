const Footer = () => {
  return (
    <footer className='relative mt-[217px] lg:mt-[297px] h-[358px] text-white '>
      <aside className='aside-footer 2xl:w-[468.5px] w-[412.5px] content-container  relative'>
        <div className='absolute w-full h-[535px] flex items-center justify-between left-0 content-container'>
          <div className='h-full flex flex-col justify-between py-10'>
            <div className='flex'>
              <img src='/images/footerIconDesktop.png' alt='' />
            </div>
            <div className='text-2xl leading-7 flex flex-col gap-4'>
              <p>FACEBOOK</p>
              <p>INSTAGRAM</p>
              <p>TWITTER</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-2xl '>Contact:</p>
              <p className=''>emil_backi_@hotmail.com</p>
              <p className=''>gustav@henrikssons.org</p>
            </div>
          </div>
          <div className='h-full flex flex-col justify-between pb-10 pt-14 text-right opacity-100 w-auto lg:opacity-0 lg:w-0 transition-opacity duration-1000 lg:duration-0'>
            <div className='flex flex-col gap-4'>
              <p>Profile</p>
              <p>Inbox</p>
              <p>Memories</p>
            </div>
            <div className='flex flex-col gap-4'>
              <p>Dream Stays</p>
              <p>Dashboard</p>
              <p>Register Venue</p>
            </div>
            <div className='flex flex-wrap gap-4 justify-end items-center'>
              <p>HOME</p>
              <p>CONTACT</p>
              <p className='flex gap-2 items-center'>
                LOGOUT
                <span className='w-6 '>
                  <img src='/images/logoutRed.svg' alt='' />
                </span>
              </p>
            </div>
          </div>
        </div>
      </aside>
      <div className='absolute -z-10 w-full bottom-0 lg:h-full h-0 bg-[#323232] content-container transition-all duration-300'>
        <div className='2xl:pl-[468.5px] pl-[412.5px] w-full h-full hidden lg:flex justify-between items-center '>
          <div className='flex flex-col gap-4'>
            <p>Profile</p>
            <p>Inbox</p>
            <p>Memories</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p>Dream Stays</p>
            <p>Dashboard</p>
            <p>Register Venue</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p>HOME</p>
            <p>CONTACT</p>
            <p className='flex gap-2'>
              LOGOUT
              <span className='w-8 '>
                <img src='/images/logoutRed.svg' alt='' />
              </span>
            </p>
          </div>
          <img src='/images/footerIllustration.svg' alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
