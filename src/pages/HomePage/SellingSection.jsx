import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../../styles/emblaStyles.css";
import { NavLink } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const SellingSection = ({ title, data, processItems, delay }) => {
  const autoplayOptions = {
    delay: delay,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay(autoplayOptions),
  ]);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    if (data && processItems) {
      setCarouselData(processItems(data));
    } else if (data) {
      setCarouselData(data);
    }
  }, [data, processItems]);

  return (
    <div className="section-container my-6 w-full text-center md:mb-[80px] md:mt-[80px] md:text-start lg:mb-[120px] lg:mt-[120px]">
      <h2 className="mb-4 lg:mb-10">{title}</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {!data && <p>Loading....</p>}
          {carouselData &&
            carouselData.map((item, index) => {
              return (
                <div key={index} className="embla__slide group  aspect-square ">
                  <NavLink
                    to={
                      title === "Affordable Escapes"
                        ? item.id
                          ? `/venue/${item.id}`
                          : "#"
                        : "/"
                    }
                  >
                    <div className="relative overflow-hidden rounded-bl-[8px] rounded-br-[32px] rounded-tl-[32px] rounded-tr-[8px]">
                      <img
                        loading="lazy "
                        className="aspect-square h-full object-cover transition duration-500 ease-out group-hover:scale-105"
                        src={item.media[0]}
                        alt=""
                      />
                      {title === "Popular Destinations" && (
                        <div className="popularDestinationGradient absolute bottom-0 w-full bg-opacity-80 py-1 text-center text-lg font-bold md:h-[66px] md:py-0 md:text-2xl md:leading-[66px]">
                          {item.location.city}, {item.location.country}
                        </div>
                      )}
                    </div>
                  </NavLink>
                  {item.price && (
                    <p className="mt-2 text-center text-lg text-gray-500 transition duration-300 group-hover:text-textBlack lg:text-2xl">
                      {item.price} kr / night
                    </p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SellingSection;
