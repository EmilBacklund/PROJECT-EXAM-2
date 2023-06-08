import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TrendingCard = ({ flexDirection, data, secondCard, firstCard }) => {
  const [trendingHomes, setTrendingHomes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const filteredHomes = data.filter(
        (home) => home.price > 500 && home.rating > 4 && home.price < 20000
      );

      const sortedHomes = filteredHomes.sort((a, b) => {
        const scoreA =
          a.bookings.length * a.rating +
          new Date(a.updated).getTime() / 1000000000;
        const scoreB =
          b.bookings.length * b.rating +
          new Date(b.updated).getTime() / 1000000000;

        return scoreB - scoreA;
      });

      setTrendingHomes(sortedHomes.slice(0, 2));
      if (firstCard) setTrendingHomes(sortedHomes.slice(0, 1));
      if (secondCard) setTrendingHomes(sortedHomes.slice(1, 2));
    }
  }, [data]);

  const formatDescription = (description) => {
    if (description.length > 256) {
      return "“..." + description.slice(0, 253) + "...“";
    } else {
      return "“..." + description + "...“";
    }
  };

  return (
    <>
      {trendingHomes &&
        trendingHomes.map((home) => {
          return (
            <div
              className={`section-container mb-10 flex flex-col ${flexDirection} md:mb-20 md:gap-6`}
            >
              <div className="aspect-video max-h-[400px] w-full overflow-hidden rounded-bl-[8px] rounded-br-[32px] rounded-tl-[32px] rounded-tr-[8px] bg-white md:aspect-auto md:flex-1">
                <img
                  className="h-full w-full object-cover"
                  src={home.media[0]}
                />
              </div>
              <div className="flex flex-col gap-2 px-6 pt-2 md:flex-1 md:justify-between md:px-2 md:py-1 lg:px-6 lg:py-2">
                <div className="flex flex-col gap-2 md:gap-6">
                  <div className="flex items-end gap-2">
                    <img className="w-8 sm:w-auto" src="/images/star.svg" />
                    <p className="font-josefinsSans text-2xl font-medium leading-[26px] md:text-[40px] md:leading-[42px]">
                      {home.rating}
                    </p>
                  </div>
                  <h3 className="font-bold lg:text-2xl">{home.name}</h3>
                  <p className="text-center lg:text-xl lg:leading-[30px]">
                    {formatDescription(home.description)}
                  </p>
                </div>
                <div className="mt-4 flex flex-col items-center  justify-between smallScreen:mt-0 smallScreen:flex-row smallScreen:items-end">
                  <p className="font-josefinsSans text-lg font-semibold md:text-xl lg:text-2xl  ">
                    {home.price} kr /night
                  </p>
                  <div className="relative w-full overflow-hidden smallScreen:w-auto">
                    <button
                      onClick={() => {
                        navigate(`/venue/${home.id}`);
                      }}
                      className="before:buttonCTAeffect h-[42px] w-full rounded-bl-[4px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[4px] border border-textBlack font-carena leading-[42px] transition duration-500 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-center before:scale-x-0 before:rounded-bl-[24px] before:rounded-br-[4px] before:rounded-tl-[4px] before:rounded-tr-[24px] before:bg-textBlack before:transition-transform before:duration-300 after:overflow-hidden hover:bg-textBlack  hover:text-background hover:before:-scale-x-100 smallScreen:w-auto smallScreen:px-[66px] lg:text-xl"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default TrendingCard;
