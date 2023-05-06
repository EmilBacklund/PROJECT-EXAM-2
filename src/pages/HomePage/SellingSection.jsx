import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
import '../../styles/emblaStyles.css';

const SellingSection = ({ title }) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="my-6 md:mb-[80px] lg:mb-[120px] md:mt-[80px] lg:mt-[120px] text-center md:text-start section-container w-full">
      <h2 className="mb-4 lg:mb-10">{title}</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="sellingSectionCard embla__slide">
            <img
              loading="lazy"
              className="aspect-square object-cover h-full"
              src="/images/image1.jpg "
              alt=""
            />
          </div>
          <div className="sellingSectionCard embla__slide">
            <img
              loading="lazy"
              className="aspect-square object-cover h-full"
              src="/images/image2.jpg"
              alt=""
            />
          </div>
          <div className="sellingSectionCard embla__slide">
            <img
              loading="lazy"
              className="aspect-square object-cover h-full"
              src="/images/image3.jpg"
              alt=""
            />
          </div>
          <div className="sellingSectionCard embla__slide">
            <img
              loading="lazy"
              className="aspect-square object-cover h-full"
              src="/images/image1.jpg "
              alt=""
            />
          </div>
          <div className="sellingSectionCard embla__slide">
            <img
              loading="lazy"
              className="aspect-square object-cover h-full"
              src="/images/image2.jpg"
              alt=""
            />
          </div>
          <div className="sellingSectionCard embla__slide">
            <img
              loading="lazy"
              className="aspect-square object-cover h-full"
              src="/images/image3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingSection;
