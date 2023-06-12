import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AddToFavorite from "../../components/shared/AddToFavorite";
import RemoveFromFavorite from "../../components/shared/RemoveFromFavorite";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SearchResults = () => {
  const { filteredVenues } = useSelector((state) => state.venues);
  const { startDate } = useSelector((state) => state.venues);
  const { endDate } = useSelector((state) => state.venues);
  const [open, setOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [favoriteVenues, setFavoriteVenues] = useState([]);
  const [totalNights, setTotalNights] = useState(0);

  const calculateNumberOfNights = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const differenceInMs = endDate - startDate;
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));
    return differenceInDays;
  };

  const generateVenueUrl = (venueId) => {
    return `${location.pathname}/venue/${venueId}`;
  };

  useEffect(() => {
    setTotalNights(calculateNumberOfNights(startDate, endDate));
  }, [startDate, endDate]);

  useEffect(() => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("Favorites")) || [];
    const existingCollections =
      JSON.parse(localStorage.getItem("collections")) || [];

    const isFavoriteArray = filteredVenues.map((venue) =>
      existingFavorites.some((favorite) => favorite.id === venue.id)
    );

    const isCollectionArray = filteredVenues.map((venue) =>
      existingCollections.some((collection) =>
        collection.venues.some(
          (collectionVenue) => collectionVenue.id === venue.id
        )
      )
    );

    setFavoriteVenues(isFavoriteArray.map((v, i) => v || isCollectionArray[i]));
  }, [filteredVenues, open]);

  const truncateName = (name, length = 17) => {
    if (name.length > length) {
      return `${name.substring(0, length)}..`;
    }
    return name;
  };

  return (
    <>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-6 gap-y-12 md:w-11/12 md:grid-cols-2 md:px-0">
        {filteredVenues.map((venue, index) => (
          <div
            key={index}
            className="h-fit rounded-b-3xl border-b border-l border-r border-[#9A9A9A] border-opacity-40 px-2 pb-2"
          >
            <NavLink to={generateVenueUrl(venue.id)}>
              <div className="aspect-video max-h-[256px] w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={venue.media[0]}
                />
              </div>
            </NavLink>
            <div className="flex flex-col justify-between gap-12 px-4 pb-2.5 pt-[18px]">
              <div className="flex items-start justify-between">
                <div className="w-full">
                  <h3
                    name={venue.name}
                    className="w-3/4 cursor-default text-xl font-bold"
                  >
                    {truncateName(venue.name)}
                  </h3>
                  <div className=" flex gap-1.5 text-sm">
                    <p>{venue.beds} beds</p>
                    <span>·</span>
                    <p>{venue.bathrooms ? venue.bathrooms : 0} bathrooms</p>
                  </div>
                </div>
                {!favoriteVenues[index] && (
                  <FaRegHeart
                    onClick={() => {
                      setSelectedVenue(venue);
                      setOpen(true);
                    }}
                    className="h-8 w-8 cursor-pointer text-primaryRed"
                  />
                )}
                {favoriteVenues[index] && (
                  <FaHeart
                    onClick={() => {
                      setSelectedVenue(venue);
                      setRemoveOpen(true);
                    }}
                    className="h-8 w-8 cursor-pointer text-primaryRed"
                  />
                )}
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 md:w-auto">
                    <img src="/images/starsor.svg" />
                  </div>
                  <p className="text-sm font-bold">
                    {venue.rating === 0 && "No rating yet"}
                    {venue.rating > 0 && (
                      <span className="font-josefinsSans text-4xl font-normal">
                        {venue.rating}
                      </span>
                    )}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold md:text-xl">
                    {venue.price} /night
                  </p>
                  <p className="text-xs font-light underline md:text-sm">
                    {totalNights * venue.price === 0
                      ? venue.price
                      : totalNights * venue.price}
                    kr total
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddToFavorite
        setIsFavorite={setFavoriteVenues}
        venueData={selectedVenue}
        open={open}
        setOpen={setOpen}
      />
      <RemoveFromFavorite
        id={selectedVenue ? selectedVenue.id : null}
        open={removeOpen}
        setOpen={setRemoveOpen}
        setAddToFavoriteOpen={setOpen}
        setIsFavorite={setFavoriteVenues}
      />
    </>
  );
};

export default SearchResults;
