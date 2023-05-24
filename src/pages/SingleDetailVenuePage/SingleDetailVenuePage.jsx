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

const SingleDetailVenuePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [venueData, setVenueData] = useState(null);
  const { isLoading } = useSelector((state) => state.loader);
  const [isFavorite, setIsFavorite] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

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
    const differenceInDays = Math.round(
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

    const dayOfWeek = days[date.getUTCDay()];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

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
          <div className="w-full sm:max-w-[1440px] mx-auto ">
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
                  onClick={() => setIsFavorite(true)}
                  className="text-primaryRed w-8 h-8 cursor-pointer"
                />
              )}
              {isFavorite && (
                <FaHeart
                  onClick={() => setIsFavorite(false)}
                  className="text-primaryRed w-8 h-8 cursor-pointer"
                />
              )}
            </div>
            <div className="h-0.5 w-full bg-primaryRed mb-4 sm:mb-10"></div>
            <div className="section-container">
              <div className="flex justify-between gap-2 font-bold lg:font-semibold text-sm lg:text-xl mb-4 sm:mb-10 flex-wrap">
                <div className="mr-10">
                  {venueData.venueProfileRatings.length === 0 && (
                    <div>Currently no rating</div>
                  )}
                </div>
                <div className="mr-10">{venueData.squareMeter}m²</div>
                <div className="mr-10">{venueData.price}kr /night</div>
                <div>{venueData.beds} beds · need bathroom info</div>
              </div>
              <div>{venueData.description}</div>
              <div className="flex mt-4 sm:mt-10 gap-10 mb-4 sm:mb-10">
                <div className="flex-1 w-full">
                  <p className="font-semibold">{formatDate(fromDate)}</p>
                  <Calendar
                    onChange={setFromDate}
                    value={fromDate}
                    maxDate={toDate}
                    className="w-full rounded border-none shadow-xl"
                    minDate={new Date()}
                    tileClassName={highlightRange}
                  />
                </div>
                <div className="flex-1 w-full">
                  <p className="font-semibold">{formatDate(toDate)}</p>
                  <Calendar
                    onChange={setToDate}
                    value={toDate}
                    minDate={fromDate}
                    className="flex-1 rounded border-none shadow-xl"
                    tileClassName={highlightRange}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-10 items-center">
                <div className="relative overflow-hidden  w-min">
                  <button className="border after:overflow-hidden font-carena lg:text-xl border-textBlack leading-[42px] h-[42px] w-full smallScreen:w-auto smallScreen:px-[66px] rounded-tl-[24px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[24px] hover:bg-textBlack hover:text-background transition duration-500 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-textBlack before:-z-10 before:transition-transform before:duration-300 before:origin-center before:buttonCTAeffect before:scale-x-0  hover:before:-scale-x-100 before:rounded-tl-[4px] before:rounded-tr-[24px] before:rounded-bl-[24px] before:rounded-br-[4px]">
                    Book
                  </button>
                </div>
                <div>
                  <p>{venueData.price}kr /night</p>
                  <p className="text-xl font-semibold">
                    {numberOfDays} days, {venueData.price * numberOfDays}kr
                    total
                  </p>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default SingleDetailVenuePage;
