import { useState, useEffect, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import AuthCarousel from '../../pages/HomePage/AuthCarousel';
import Menu from '../Menu';
import { getItem } from '../../utils/storage';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../store/modules/authenticationSlice';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const menuRef = useRef();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  console.log('isAuthenticated: ', isAuthenticated);

  // This variable will be checked through Redux Store later

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'token') {
        setIsAuthenticated(!!getItem('token'));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="content-container py-4 flex items-center justify-between shadow">
      <div className="w-10 md:w-auto">
        <NavLink className="w-10 md:w-full" to="/">
          <img
            className="w-full md:hidden"
            src="/images/mobileIcon.svg"
            alt=""
          />
          <img className=" hidden md:block" src="/images/Group13.svg" alt="" />
        </NavLink>
      </div>
      {!isAuthenticated && isHomepage && <AuthCarousel />}
      <nav className="sm:relative" ref={menuRef}>
        <div
          onClick={() => setMenuActive(!menuActive)}
          className="h-4 flex flex-col justify-between cursor-pointer "
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
        {menuActive && <Menu />}
      </nav>
    </header>
  );
};

export default Header;
