import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedView } from '../../store/modules/displayedHomepageViewSlice';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

const swipeConfidenceThreshold = 1;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const AuthCarousel = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(1);
  const views = ['Login', 'Booking', 'Register'];

  const goPrev = async () => {
    setCurrentIndex((currentIndex - 1 + views.length) % views.length);
    await dispatch(setSelectedView(views[(currentIndex - 1 + views.length) % views.length]));
  };

  const goNext = async () => {
    setCurrentIndex((currentIndex + 1) % views.length);
    await dispatch(setSelectedView(views[(currentIndex + 1) % views.length]));
  };

  const handleClick = async (view, index) => {
    await dispatch(setSelectedView(view));
    if (index === 0) {
      goPrev();
    } else if (index === 2) {
      goNext();
    }
  };

  const orderedViews = [
    views[(currentIndex - 1 + views.length) % views.length],
    views[currentIndex],
    views[(currentIndex + 1) % views.length],
  ];

  const durations = [0.4, 0.6, 0.8];

  return (
    <AnimatePresence>
      <motion.div
        className='flex sm:gap-8 gap-5 items-center justify-center relative select-none px-2 '
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.03}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            goNext();
          } else if (swipe > swipeConfidenceThreshold) {
            goPrev();
          }
        }}
      >
        <div className='w-full absolute h-full z-10 gradient-opacity pointer-events-none'></div>

        {orderedViews.map((view, index) => (
          <motion.div
            key={view}
            initial={{ y: '-200px' }}
            animate={{ y: 0, scale: index === 1 ? 1.3 : 1 }}
            transition={{
              y: { duration: durations[index] },
              scale: { type: 'spring', stiffness: 400, damping: 50 },
            }}
            className={classNames('text-xs sm:text-sm cursor-pointer text-center', {
              'font-semibold': index === 1,
            })}
            onClick={async () => {
              await handleClick(view, index);
            }}
          >
            {view}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthCarousel;
