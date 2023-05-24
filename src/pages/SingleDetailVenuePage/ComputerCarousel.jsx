import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/captions.css';

const ComputerCarousel = ({ venueData }) => {
  const validImages = venueData.media.filter((item) => item.image !== null);
  const firstFourImages = validImages.slice(0, 4);
  const remainingImages = validImages.length - 4;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden w-full gap-5 lg:flex max-h-[512px] aspect-video h-full    ">
        <div
          onClick={() => setOpen(true)}
          className=" flex-1 h-full w-full cursor-pointer  hover:scale-[1.015] transition duration-200"
        >
          <img
            className="object-cover h-full w-full rounded-tl-[40px] rounded-bl-2xl"
            src={firstFourImages[0]?.image}
            alt=""
          />
        </div>
        <div className="flex flex-col flex-1 gap-5 h-full">
          <div
            onClick={() => setOpen(true)}
            className="flex flex-1 h-1/2 w-full cursor-pointer hover:scale-[1.015] transition duration-200"
          >
            <img
              className="w-full object-cover rounded-tr-2xl"
              src={firstFourImages[1]?.image}
              alt=""
            />
          </div>
          <div className="flex gap-5 flex-1 h-1/2">
            <div
              onClick={() => setOpen(true)}
              className="h-full cursor-pointer hover:scale-[1.015] transition duration-200"
            >
              <img
                className="w-full h-full object-cover "
                src={firstFourImages[2]?.image}
                alt=""
              />
            </div>
            <div
              onClick={() => setOpen(true)}
              className="h-full cursor-pointer hover:scale-[1.015] transition duration-200 relative"
            >
              <img
                className="w-full h-full object-cover rounded-br-[40px]"
                src={firstFourImages[3]?.image}
                alt=""
              />
              {remainingImages > 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-br-[40px]">
                  <div className="w-full h-full relative ">
                    <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold text-white text-4xl">
                      +
                      <span className="font-josefinsSans">
                        {remainingImages}
                      </span>{' '}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        slides={validImages.map((item) => ({
          src: item.image,
          alt: item.description,
          description: item.description,
        }))}
        open={open}
        close={() => setOpen(false)}
        plugins={[Captions, Fullscreen, Slideshow, Zoom]}
        captions={{
          showToggle: true,
        }}
      />
    </>
  );
};

export default ComputerCarousel;
