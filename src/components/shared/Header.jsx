import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthCarousel from '../../pages/HomePage/AuthCarousel';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  // This variable will be checked through Redux Store later
  const isAuthenticated = false;

  return (
    <header className='content-container py-4 flex items-center justify-between border-b border-holidazeGrey'>
      <a className='w-10' href='/'>
        <img className='w-full' src='/images/mobileIcon.svg' alt='' />
      </a>
      {!isAuthenticated && isHomepage && <AuthCarousel />}
      <nav>
        <div
          onClick={() => setMenuActive(!menuActive)}
          className='h-4 flex flex-col justify-between cursor-pointer'
        >
          <div
            className={`w-8 h-1 bg-textBlack custom-transition${
              menuActive ? ' rotate-45 translate-y-1.5' : ''
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-textBlack custom-transition${
              menuActive ? ' -rotate-45 -translate-y-1.5' : ''
            }`}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
