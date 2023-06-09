import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setSelectedView } from "../store/modules/displayedHomepageViewSlice";
import { setCarouselIndex } from "../store/modules/carouselIndexSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getItem } from "../utils/storage";

const Menu = ({ setMenuActive }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { logOut } = useAuth();
  let navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  useEffect(() => {
    const user = getItem("user");
    const token = getItem("token");

    if (user && !token) {
      logOut();
    }
  }, [setMenuActive]);

  const loginView = () => {
    navigate("/");
    dispatch(setSelectedView("Login"));
    dispatch(setCarouselIndex(0));
  };

  const activeClassName = (path, activeClasses, notActiveClasses) => {
    return location.pathname === path ? activeClasses : notActiveClasses;
  };

  const baseClasses = "block border-l-4 py-2 pl-3 pr-4 text-base font-medium";
  const activeClasses =
    "border-secondaryOrange bg-[#F6EAE3] text-secondaryOrange";
  const notActiveClasses =
    "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800";

  return (
    <div className="absolute right-0 z-20 mt-8 w-full origin-top-right select-none rounded-md bg-white shadow-lg sm:mt-2 sm:w-80">
      <div className={`space-y-1 pt-2  ${isAuthenticated ? "pb-3" : "pb-2"}`}>
        <NavLink
          onClick={(event) => {
            event.stopPropagation();
            setMenuActive(false);
          }}
          className={`${baseClasses} ${activeClassName(
            "/",
            activeClasses,
            notActiveClasses
          )}`}
          to="/"
        >
          {isAuthenticated ? "Booking" : "Home"}
        </NavLink>
        <NavLink
          onClick={(event) => {
            event.stopPropagation();
            setMenuActive(false);
          }}
          className={`${baseClasses} ${activeClassName(
            "/contact",
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
          isAuthenticated ? "pt-4" : "pt-2"
        }`}
      >
        {isAuthenticated && (
          <div className="flex items-center px-4">
            {user && (
              <>
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    className=" h-full w-full rounded object-cover"
                    src={user?.avatar ? user?.avatar : "/images/avatar.png"}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 ">
                    {user?.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user?.email}
                  </div>
                </div>
              </>
            )}
            {!user && <p>Loading....</p>}
          </div>
        )}
        <div className={` space-y-1 ${isAuthenticated ? "mt-3" : "mt-0"}`}>
          {isAuthenticated && (
            <>
              <NavLink
                onClick={(event) => {
                  event.stopPropagation();
                  setMenuActive(false);
                }}
                className={`${baseClasses} ${activeClassName(
                  `/profile/${user?.name}`,
                  activeClasses,
                  notActiveClasses
                )}`}
                to={`/profile/${user?.name}`}
              >
                Your Profile
              </NavLink>
              <NavLink
                onClick={(event) => {
                  event.stopPropagation();
                  setMenuActive(false);
                }}
                className={`${baseClasses} ${activeClassName(
                  "/messages",
                  activeClasses,
                  notActiveClasses
                )}`}
                to="/messages"
              >
                Inbox
              </NavLink>
              <NavLink
                onClick={(event) => {
                  event.stopPropagation();
                  setMenuActive(false);
                }}
                className={`${baseClasses} ${activeClassName(
                  "/memories",
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
            onClick={(event) => {
              event.stopPropagation();
              setMenuActive(false);
            }}
            className={`${baseClasses} ${activeClassName(
              "/dreamstays",
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
                onClick={(event) => {
                  event.stopPropagation();
                  setMenuActive(false);
                }}
                className={`${baseClasses} ${activeClassName(
                  "/dashboard",
                  activeClasses,
                  notActiveClasses
                )}`}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <div className="pb-3">
                <NavLink
                  title={`${
                    !venueManager &&
                    "You need to be a venue manager to register a venue"
                  }`}
                  onClick={(event) => {
                    if (!venueManager) {
                      event.preventDefault();
                    } else {
                      event.stopPropagation();
                      setMenuActive(false);
                    }
                  }}
                  className={`${baseClasses} ${activeClassName(
                    "/registerVenue",
                    activeClasses,
                    notActiveClasses
                  )} ${!venueManager && "cursor-not-allowed opacity-50"}`}
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
                      setMenuActive(false);
                    }
                  : () => {
                      loginView();
                      setMenuActive(false);
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
