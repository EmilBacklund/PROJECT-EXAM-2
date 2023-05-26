import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedView } from '../../store/modules/displayedHomepageViewSlice';
import { setCarouselIndex } from '../../store/modules/carouselIndexSlice';
import useAuth from '../../hooks/useAuth';

const Footer = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const { logOut } = useAuth();
  const dispatch = useDispatch();

  const loginView = () => {
    navigate('/');
    dispatch(setSelectedView('Login'));
    dispatch(setCarouselIndex(0));
  };

  return (
    <footer className="relative mt-[217px] lg:mt-[297px] h-[358px] text-white ">
      <aside className="aside-footer z-10 2xl:w-[468.5px] w-[412.5px] content-container  relative">
        <div className="absolute w-full h-[535px] flex items-center justify-between left-0 content-container">
          <div className="h-full flex flex-col justify-between py-10">
            <div className="flex">
              <img src="/images/footerIconDesktop.png" alt="" />
            </div>
            <div className="text-2xl leading-7 flex flex-col gap-4">
              <NavLink
                className="hover:text-secondaryOrange transition-colors duration-200"
                to="https://www.facebook.com/emil.backi/"
              >
                FACEBOOK
              </NavLink>
              <NavLink
                className="hover:text-secondaryOrange transition-colors duration-200"
                to="https://www.instagram.com/baackiii/"
              >
                INSTAGRAM
              </NavLink>
              <NavLink
                className="hover:text-secondaryOrange transition-colors duration-200"
                to="https://twitter.com/backiz"
              >
                TWITTER
              </NavLink>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl ">Contact:</p>
              <NavLink to="mailto:emil_backi_@hotmail.com">
                emil_backi_@hotmail.com
              </NavLink>
              <NavLink to="mailto:gustav@henrikssons.org">
                gustav@henrikssons.org
              </NavLink>
            </div>
          </div>
          <div className="h-full flex flex-col justify-between pb-10 pt-14 text-right opacity-100 w-auto lg:opacity-0 lg:w-0 transition-opacity duration-1000 lg:duration-0">
            <div className="flex flex-col gap-4">
              <NavLink
                className={`${
                  !isAuthenticated
                    ? 'cursor-not-allowed text-gray-500'
                    : 'hover:text-secondaryOrange transition-colors duration-200'
                }`}
                onClick={
                  !isAuthenticated
                    ? (e) => {
                        e.preventDefault();
                      }
                    : null
                }
                to="/profile"
              >
                Profile
              </NavLink>
              <NavLink
                className={`${
                  !isAuthenticated
                    ? 'cursor-not-allowed text-gray-500'
                    : 'hover:text-secondaryOrange transition-colors duration-200'
                }`}
                onClick={
                  !isAuthenticated
                    ? (e) => {
                        e.preventDefault();
                      }
                    : null
                }
                to="/messages"
              >
                Inbox
              </NavLink>
              <NavLink
                className={`${
                  !isAuthenticated
                    ? 'cursor-not-allowed text-gray-500'
                    : 'hover:text-secondaryOrange transition-colors duration-200'
                }`}
                onClick={
                  !isAuthenticated
                    ? (e) => {
                        e.preventDefault();
                      }
                    : null
                }
                to="/memories"
              >
                Memories
              </NavLink>
            </div>
            <div className="flex flex-col gap-4">
              <NavLink
                className="hover:text-secondaryOrange transition-colors duration-200"
                to="/dreamstays"
              >
                Dream Stays
              </NavLink>
              <NavLink
                className={`${
                  !isAuthenticated
                    ? 'cursor-not-allowed text-gray-500'
                    : 'hover:text-secondaryOrange transition-colors duration-200'
                }`}
                onClick={
                  !isAuthenticated
                    ? (e) => {
                        e.preventDefault();
                      }
                    : null
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={`${
                  !isAuthenticated
                    ? 'cursor-not-allowed text-gray-500'
                    : 'hover:text-secondaryOrange transition-colors duration-200'
                }`}
                onClick={
                  !isAuthenticated
                    ? (e) => {
                        e.preventDefault();
                      }
                    : null
                }
                to="/registervenue"
              >
                Register Venue
              </NavLink>
            </div>
            <div className="flex flex-wrap gap-4 justify-end items-center">
              <NavLink
                className="hover:text-secondaryOrange transition-colors duration-200"
                to="/"
              >
                {isAuthenticated ? 'BOOKING' : 'HOME'}
              </NavLink>
              <NavLink
                className="hover:text-secondaryOrange transition-colors duration-200"
                to="/contact"
              >
                CONTACT
              </NavLink>
              <NavLink
                onClick={
                  isAuthenticated
                    ? () => {
                        logOut();
                      }
                    : () => {
                        loginView();
                      }
                }
                to="/"
                className="flex gap-2 items-center hover:text-secondaryOrange transition-colors duration-200"
              >
                {isAuthenticated && <button>LOGOUT</button>}
                {!isAuthenticated && <button>LOGIN</button>}
                <span className="w-6 ">
                  {isAuthenticated && (
                    <img src="/images/logoutRed.svg" alt="logout" />
                  )}
                  {!isAuthenticated && (
                    <img src="/images/login.svg" alt="login" />
                  )}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
      <div className="absolute w-full bottom-0 lg:h-full h-0 bg-[#323232] content-container transition-all duration-300">
        <div className="2xl:pl-[468.5px] pl-[412.5px] w-full h-full hidden lg:flex justify-between items-center ">
          <div className="flex flex-col gap-4">
            <NavLink
              className={`${
                !isAuthenticated
                  ? 'cursor-not-allowed text-gray-500'
                  : 'hover:text-secondaryOrange transition-colors duration-200'
              }`}
              onClick={
                !isAuthenticated
                  ? (e) => {
                      e.preventDefault();
                    }
                  : null
              }
              to="/profile"
            >
              Profile
            </NavLink>
            <NavLink
              className={`${
                !isAuthenticated
                  ? 'cursor-not-allowed text-gray-500'
                  : 'hover:text-secondaryOrange transition-colors duration-200'
              }`}
              onClick={
                !isAuthenticated
                  ? (e) => {
                      e.preventDefault();
                    }
                  : null
              }
              to="/messages"
            >
              Inbox
            </NavLink>
            <NavLink
              className={`${
                !isAuthenticated
                  ? 'cursor-not-allowed text-gray-500'
                  : 'hover:text-secondaryOrange transition-colors duration-200'
              }`}
              onClick={
                !isAuthenticated
                  ? (e) => {
                      e.preventDefault();
                    }
                  : null
              }
              to="/memories"
            >
              Memories
            </NavLink>
          </div>
          <div className="flex flex-col gap-4">
            <NavLink
              className="hover:text-secondaryOrange transition-colors duration-200"
              to="/dreamstays"
            >
              Dream Stays
            </NavLink>
            <NavLink
              className={`${
                !isAuthenticated
                  ? 'cursor-not-allowed text-gray-500'
                  : 'hover:text-secondaryOrange transition-colors duration-200'
              }`}
              onClick={
                !isAuthenticated
                  ? (e) => {
                      e.preventDefault();
                    }
                  : null
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={`${
                !isAuthenticated
                  ? 'cursor-not-allowed text-gray-500'
                  : 'hover:text-secondaryOrange transition-colors duration-200'
              }`}
              onClick={
                !isAuthenticated
                  ? (e) => {
                      e.preventDefault();
                    }
                  : null
              }
              to="/registervenue"
            >
              Register Venue
            </NavLink>
          </div>
          <div className="flex flex-col gap-4 z-10">
            <NavLink
              className="hover:text-secondaryOrange transition-colors duration-200"
              to="/"
            >
              {isAuthenticated ? 'BOOKING' : 'HOME'}
            </NavLink>
            <NavLink
              className="hover:text-secondaryOrange transition-colors duration-200"
              to="/contact"
            >
              CONTACT
            </NavLink>
            <NavLink
              onClick={
                isAuthenticated
                  ? () => {
                      logOut();
                    }
                  : () => {
                      loginView();
                    }
              }
              to="/"
              className="flex gap-2 items-center hover:text-secondaryOrange transition-colors duration-200"
            >
              {isAuthenticated && <button>LOGOUT</button>}
              {!isAuthenticated && <button>LOGIN</button>}
              <span className="w-6 ">
                {isAuthenticated && (
                  <img src="/images/logoutRed.svg" alt="logout" />
                )}
                {!isAuthenticated && (
                  <img src="/images/login.svg" alt="login" />
                )}
              </span>
            </NavLink>
          </div>
          <img src="/images/footerIllustration.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
