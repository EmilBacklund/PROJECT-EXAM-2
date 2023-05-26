import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { setSelectedView } from '../store/modules/displayedHomepageViewSlice';
import { setCarouselIndex } from '../store/modules/carouselIndexSlice';
import { useSelector } from 'react-redux';
import reusableAxiosComponent from '../api/reusableAxiosComponent';

const Menu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { logOut } = useAuth();
  let navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  console.log('isAuthenticated asd: ', isAuthenticated);

  const loginView = () => {
    navigate('/');
    dispatch(setSelectedView('Login'));
    dispatch(setCarouselIndex(0));
  };

  const activeClassName = (path, activeClasses, notActiveClasses) => {
    return location.pathname === path ? activeClasses : notActiveClasses;
  };

  const baseClasses = 'block border-l-4 py-2 pl-3 pr-4 text-base font-medium';
  const activeClasses =
    'border-secondaryOrange bg-[#F6EAE3] text-secondaryOrange';
  const notActiveClasses =
    'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800';

  return (
    <div className="absolute z-20 w-full sm:w-80 bg-white right-0 origin-top-right shadow-lg rounded-md mt-8 sm:mt-2 select-none">
      <div className={`space-y-1 pt-2  ${isAuthenticated ? 'pb-3' : 'pb-2'}`}>
        <NavLink
          className={`${baseClasses} ${activeClassName(
            '/',
            activeClasses,
            notActiveClasses
          )}`}
          to="/"
        >
          {isAuthenticated ? 'Booking' : 'Home'}
        </NavLink>
        <NavLink
          className={`${baseClasses} ${activeClassName(
            '/contact',
            activeClasses,
            notActiveClasses
          )}`}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div
        className={`border-t border-gray-200 pb-3  ${
          isAuthenticated ? 'pt-4' : 'pt-2'
        }`}
      >
        {isAuthenticated && (
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded"
                src="/images/profileTest.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                Gustav Henriksson
              </div>
              <div className="text-sm font-medium text-gray-500">
                gustav@henrikssons.org
              </div>
            </div>
          </div>
        )}
        <div className={` space-y-1 ${isAuthenticated ? 'mt-3' : 'mt-0'}`}>
          {isAuthenticated && (
            <>
              <NavLink
                className={`${baseClasses} ${activeClassName(
                  '/profile',
                  activeClasses,
                  notActiveClasses
                )}`}
                to="/profile"
              >
                Your Profile
              </NavLink>
              <NavLink
                className={`${baseClasses} ${activeClassName(
                  '/messages',
                  activeClasses,
                  notActiveClasses
                )}`}
                to="/messages"
              >
                Inbox
              </NavLink>
              <NavLink
                className={`${baseClasses} ${activeClassName(
                  '/memories',
                  activeClasses,
                  notActiveClasses
                )}`}
                to="/memories"
              >
                Memories
              </NavLink>
            </>
          )}
          <NavLink
            className={`${baseClasses} ${activeClassName(
              '/dreamstays',
              activeClasses,
              notActiveClasses
            )}`}
            to="/dreamstays"
          >
            Dream Stays
          </NavLink>
          {isAuthenticated && (
            <>
              <NavLink
                className={`${baseClasses} ${activeClassName(
                  '/dashboard',
                  activeClasses,
                  notActiveClasses
                )}`}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <div className="pb-3">
                <NavLink
                  className={`${baseClasses} ${activeClassName(
                    '/registerVenue',
                    activeClasses,
                    notActiveClasses
                  )}`}
                  to="/registerVenue"
                >
                  Register Venue
                </NavLink>
              </div>
            </>
          )}
          <div className="border-t border-gray-200  pt-4">
            <NavLink
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              to="/"
              onClick={
                isAuthenticated
                  ? () => {
                      logOut();
                    }
                  : () => {
                      loginView();
                    }
              }
            >
              {isAuthenticated && <button>Sign out</button>}
              {!isAuthenticated && <button>Sign in</button>}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
