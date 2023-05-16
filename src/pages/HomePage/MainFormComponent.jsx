import { motion, AnimatePresence } from 'framer-motion';

const MainFormComponent = ({ children, onSubmit }) => {
  const fadeInOutVariants = {
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: 'easeInOut',
      },
    },
    out: {
      y: 10,
      opacity: 0.7,
      transition: {
        duration: 0.35,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 section-container w-full md:w-11/12 z-10 h-full ">
      <div className="relative h-full w-full ">
        <form
          onSubmit={onSubmit}
          className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          <AnimatePresence>
            <motion.div
              key={children}
              initial="out"
              animate="in"
              exit="out"
              variants={fadeInOutVariants}
            >
              <div className="md:w-full bg-black md:bg-opacity-30 bg-opacity-40 text-white">
                <div className="max-w-4xl mx-auto py-2 md:py-10 px-2 sm:px-4 md:0">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    Find Your Perfect Stay!
                  </h1>
                  <p className="text-sm md:text-base">
                    At Holidaze, you can find thousands of cottages, houses, and
                    apartments that you can rent directly from the owners -
                    without any hassle. Renting is easy: simply locate a
                    property using our search function, and then contact the
                    owner directly for inquiries and booking.
                  </p>
                </div>
              </div>

              {children}
            </motion.div>
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
};

export default MainFormComponent;
