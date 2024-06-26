import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

const variants = {
  enter: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 1000 : -1000,
      y: 0,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
export function ImageCarousel({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const [delay] = useState<number>(3500);
  const [isPlaying, setPlaying] = useState<boolean>(true);

  useInterval(
    () => {
      paginate(1);
    },
    isPlaying ? delay : null
  );

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className='h-full w-full object-contain object-center'
          onHoverStart={() => setPlaying(false)}
          onHoverEnd={() => setPlaying(true)}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'just', stiffness: 100, damping: 10 },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      {/*<div className="next" onClick={() => paginate(1)}>*/}
      {/*  {"‣"}*/}
      {/*</div>*/}
      {/*<div className="prev" onClick={() => paginate(-1)}>*/}
      {/*  {"‣"}*/}
      {/*</div>*/}
    </>
  );
}
