import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getVenue from '../../api/getVenue';
import BreadCrumbs from './BreadCrumbs';
import MobileCarousel from './MobileCarousel';
import ComputerCarousel from './ComputerCarousel';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import Calendar from 'react-calendar';
import '../../styles/singleVenueCalendar.css';
import useWindowWidth from '../../hooks/useWindowWidth';
import amenityImages from '../../utils/amenityImages';
import AddToFavorite from '../../components/shared/AddToFavorite';
import RemoveFromFavorite from '../../components/shared/RemoveFromFavorite';

const SingleDetailVenuePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [venueData, setVenueData] = useState(null);
  const { isLoading } = useSelector((state) => state.loader);
  const [isFavorite, setIsFavorite] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const windowWidth = useWindowWidth();
  const [isPickingStartDate, setIsPickingStartDate] = useState(true);
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API;
  const [open, setOpen] = useState(false);
  const [removeAsFavorite, setRemoveAsFavorite] = useState(false);

  const isMobileView = windowWidth <= 768;

  useEffect(() => {
    const existingFavorites =
      JSON.parse(localStorage.getItem('Favorites')) || [];
    const existingCollections =
      JSON.parse(localStorage.getItem('collections')) || [];

    const isVenueInFavorites = existingFavorites.some(
      (favorite) => favorite.id === venueData?.id
    );
    const isVenueInCollections = existingCollections.some((collection) =>
      collection.venues.some((venue) => venue.id === venueData?.id)
    );

    setIsFavorite(isVenueInFavorites || isVenueInCollections);
  }, [venueData]);

  const street = venueData?.location.street?.replace(/ /g, '+') || '';
  const city = venueData?.location.city?.replace(/ /g, '+') || '';
  const state = venueData?.location.state?.replace(/ /g, '+') || '';

  const highlightRange = ({ date, view }) => {
    if (view !== 'month' || !fromDate || !toDate) {
      return null;
    }

    if (date >= fromDate && date <= toDate) {
      return 'rangeHighlight';
    }
  };

  const calculateDateDifference = (date1, date2) => {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const differenceInMilliseconds = Math.abs(date2 - date1);
    const differenceInDays = Math.ceil(
      differenceInMilliseconds / oneDayInMilliseconds
    );

    return differenceInDays;
  };

  function formatDate(date) {
    if (!date) return '';

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayOfWeek} ${month} ${day}, ${year}`;
  }

  const numberOfDays = calculateDateDifference(fromDate, toDate);
  console.log('number of days:', numberOfDays);
  console.log('fromDate:', fromDate);

  useEffect(() => {
    dispatch(getVenue(id))
      .then((data) => {
        setVenueData(data);
      })
      .catch((error) => {
        console.error('Failed to fetch venue data:', error);
      });
  }, [id, dispatch]);

  console.log('venueData', venueData);

  return (
    <>
      {!isLoading && venueData && <BreadCrumbs venueData={venueData} />}
      {!isLoading && venueData && (
        <>
          <div className="w-full sm:max-w-[1440px] mx-auto overflow-hidden">
            <div className=" relative lg:hidden">
              <MobileCarousel slides={venueData.media} />
            </div>
            <ComputerCarousel venueData={venueData} />
          </div>
          <main className=" mt-4 sm:mt-10">
            <div className="flex gap-4 items-baseline section-container">
              <h2 className="mb-2">{venueData.title}</h2>
              {!isFavorite && (
                <FaRegHeart
                  onClick={() => setOpen(true)}
                  className="text-primaryRed w-8 h-8 cursor-pointer"
                />
              )}
              {isFavorite && (
                <FaHeart
                  onClick={() => setRemoveAsFavorite(true)}
                  className="text-primaryRed w-8 h-8 cursor-pointer"
                />
              )}
              <AddToFavorite
                venueData={venueData}
                open={open}
                setOpen={setOpen}
                setIsFavorite={setIsFavorite}
              />
              <RemoveFromFavorite
                open={removeAsFavorite}
                setOpen={setRemoveAsFavorite}
                setAddToFavoriteOpen={setOpen}
                id={venueData.id}
                setIsFavorite={setIsFavorite}
              />
            </div>
            <div className="h-0.5 w-full bg-primaryRed mb-4 sm:mb-10"></div>
            <div className="section-container">
              <div className="flex justify-between gap-2 font-bold lg:font-semibold text-sm md:text-xl mb-4 sm:mb-10 flex-wrap">
                <div className="mr-10">
                  {venueData.venueProfileRatings.length === 0 && (
                    <div>Currently no rating</div>
                  )}
                </div>
                <div className="mr-10">{venueData.squareMeter}m²</div>
                <div className="mr-10">{venueData.price}kr /night</div>
                <div>
                  {venueData.beds} beds · {venueData.bathrooms} bathrooms
                </div>
              </div>
              <div>{venueData.description}</div>
              <div className="flex mt-4 sm:mt-10 gap-10 mb-4 sm:mb-10">
                <div className="flex-1 w-full">
                  <div className="flex gap-2">
                    <p className="font-semibold">{formatDate(fromDate)} </p>
                    {isMobileView && (
                      <>
                        {fromDate && <p>-</p>}
                        <p className="font-semibold"> {formatDate(toDate)}</p>
                      </>
                    )}
                  </div>
                  <Calendar
                    onChange={(date) => {
                      if (isMobileView) {
                        if (isPickingStartDate) {
                          setFromDate(date);
                          setIsPickingStartDate(false);
                        } else {
                          if (date >= fromDate) {
                            setToDate(date);
                            setIsPickingStartDate(true);
                          } else {
                            alert('End date should be after the start date.');
                          }
                        }
                      } else {
                        setFromDate(date);
                      }
                    }}
                    value={isPickingStartDate ? fromDate : toDate}
                    maxDate={isMobileView ? null : toDate}
                    className="w-full rounded border-none shadow-xl"
                    minDate={isMobileView ? fromDate || new Date() : new Date()}
                    tileClassName={highlightRange}
                  />
                </div>
                {!isMobileView && (
                  <div className="flex-1 w-full ">
                    <p className="font-semibold">{formatDate(toDate)}</p>
                    <Calendar
                      onChange={setToDate}
                      value={toDate}
                      minDate={fromDate}
                      className="flex-1 rounded border-none shadow-xl"
                      tileClassName={highlightRange}
                    />
                  </div>
                )}
              </div>
              <div className="flex sm:justify-center gap-2 sm:gap-10 items-center">
                <div className="relative overflow-hidden">
                  <button className="border after:overflow-hidden font-carena lg:text-xl border-textBlack leading-[42px] h-[42px] w-full px-8 smallScreen:w-full smallScreen:px-[66px] rounded-tl-[24px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[24px] hover:bg-textBlack hover:text-background transition duration-500 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-textBlack before:-z-10 before:transition-transform before:duration-300 before:origin-center before:buttonCTAeffect before:scale-x-0  hover:before:-scale-x-100 before:rounded-tl-[4px] before:rounded-tr-[24px] before:rounded-bl-[24px] before:rounded-br-[4px]">
                    Book
                  </button>
                </div>
                <div>
                  <p>{venueData.price}kr /night</p>
                  <p className="text-lg sm:text-xl font-semibold">
                    {numberOfDays} days, {venueData.price * numberOfDays}kr
                    total
                  </p>
                </div>
              </div>
              <section className="mt-10 sm:mt-20">
                <p className="font-semibold">
                  {venueData.location.street + ','}{' '}
                  {venueData.location.city + ','}{' '}
                  {venueData.location.state + ','} {venueData.location.country}
                </p>
                <div className="w-full">
                  <img
                    className="w-full rounded min-h-[200px] object-cover"
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${street},${city},${state}&zoom=${
                      isMobileView ? '13' : '11'
                    }&size=700x250&scale=2&maptype=roadmap
                  &markers=color:0xFD7E40%7Clabel:%7C59.4334664,17.8277448
                  &key=${googleMapsApiKey}`}
                    alt=""
                  />
                </div>
              </section>
              <section className="mt-4 sm:mt-10">
                <h3 className="text-xl sm:text-[32px] mb-4 leading-[44px]">
                  Amenities
                </h3>
                <div className="flex flex-wrap">
                  {venueData.amenities.map((amenity) => {
                    if (amenityImages[amenity]) {
                      return (
                        <div className="flex flex-col gap-1 smallScreen:gap-4 w-1/2 md:w-1/3 mb-4 items-center smallScreen:flex-row">
                          <img
                            src={amenityImages[amenity]}
                            alt={amenity}
                            key={amenity}
                          />
                          <p className="font-semibold text-center smallScreen:text-start">
                            {amenity}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </section>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default SingleDetailVenuePage;
