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
    <div className='mt-6 mb-4 md:mb-[120px] md:mt-[120px] text-center md:text-start section-container'>
      <h2 className='text-xl md:text-[32px] mb-4'>{title}</h2>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          <div className='sellingSectionCard embla__slide'>
            <img
              loading='lazy'
              className='aspect-square object-cover'
              src='/images/image1.jpg '
              alt=''
            />
          </div>
          <div className='sellingSectionCard embla__slide'>
            <img
              loading='lazy'
              className='aspect-square object-cover'
              src='/images/image2.jpg'
              alt=''
            />
          </div>
          <div className='sellingSectionCard embla__slide'>
            <img
              loading='lazy'
              className='aspect-square object-cover'
              src='/images/image3.jpg'
              alt=''
            />
          </div>
          <div className='sellingSectionCard embla__slide'>
            <img
              loading='lazy'
              className='aspect-square object-cover'
              src='/images/image1.jpg '
              alt=''
            />
          </div>
          <div className='sellingSectionCard embla__slide'>
            <img
              loading='lazy'
              className='aspect-square object-cover'
              src='/images/image2.jpg'
              alt=''
            />
          </div>
          <div className='sellingSectionCard embla__slide'>
            <img
              loading='lazy'
              className='aspect-square object-cover'
              src='/images/image3.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingSection;
