import getAllUserVenues from "../../api/getAllUserVenues";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ToggleButton from "../../components/ToggleButton";
import { setLoadingState } from "../../store/modules/loaderSlice";
import EditVenueInfoModal from "./EditVenueInfoModal";
import getVenue from "../../api/getVenue";

const ManagingVenues = () => {
  const [enabled, setEnabled] = useState(false);
  const [venues, setVenues] = useState([]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [singleVenueData, setSingleVenueData] = useState(null);
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  useEffect(() => {
    dispatch(setLoadingState(true));

    getAllUserVenues()
      .then((res) => {
        setVenues(res);
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        dispatch(setLoadingState(false));
      });
  }, []);

  const handleVenueEdit = (venueId) => {
    dispatch(setLoadingState(true));

    try {
      dispatch(getVenue(venueId, isAuthenticated)).then((res) => {
        dispatch(setLoadingState(false));
        setOpen(true);
        setSingleVenueData(res);
      });
    } catch (error) {
      dispatch(setLoadingState(false));
    }
  };

  return (
    <>
      <div className="section-container">
        {venues.map((venue) => {
          return (
            <div key={venue.id}>
              <NavLink to={`/venue/${venue.id}`}>
                <h3 className="mb-2 text-2xl font-bold capitalize text-primaryRed ">
                  {venue.title}
                </h3>
              </NavLink>
              <div className="flex justify-between">
                <NavLink to={`/venue/${venue.id}`}>
                  <div className="aspect-video max-h-[166px] max-w-[295px]">
                    <img
                      className="dashboardImgShadow h-full w-full rounded-2xl object-cover"
                      src={venue.coverPhoto}
                    />
                  </div>
                </NavLink>
                <div className="flex flex-col place-items-end justify-between gap-4">
                  <div className="flex flex-col items-end">
                    {enabled && <p>Venue is active</p>}
                    {!enabled && <p>Venue is not active</p>}
                    <ToggleButton enabled={enabled} setEnabled={setEnabled} />
                  </div>
                  <button
                    onClick={() => {
                      handleVenueEdit(venue.id);
                    }}
                    className="w-max rounded-lg border-2 border-primaryRed bg-transparent px-4 py-2.5 text-sm font-bold text-primaryRed outline-offset-1 outline-textBlack hover:border-secondaryOrange hover:text-secondaryOrange focus:outline"
                  >
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <EditVenueInfoModal
        open={open}
        setOpen={setOpen}
        enabled={enabled}
        setEnabled={setEnabled}
        singleVenueData={singleVenueData}
      />
    </>
  );
};

export default ManagingVenues;
