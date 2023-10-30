import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Page1 from "../pageContent/Page1";
import Page2 from "../pageContent/Page2";
import Page3 from "../pageContent/Page3";
import Page4 from "../pageContent/Page4";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const LandingPageCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const component = [<Page1 />, <Page2 />, <Page3 />, <Page4 />];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? component.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === component.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //pagenumber section

  const pageone = 1;
  const pagetwo = 0;
  const pagethree = 3;
  const pagefour = 2;

  let pgone = 1;
  let pgtwo = 0;
  let pgthree = 3;
  let pgfour = 2;

  if (currentIndex === pageone) {
    pgone = 1;
  }
  if (currentIndex === pagetwo) {
    pgtwo = 2;
  }
  if (currentIndex === pagethree) {
    pgthree = 3;
  }
  if (currentIndex === pagefour) {
    pgfour = 4;
  }

  return (
    <div className="sm:snap-start h-screen w-[100%] relative">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="disappearing-div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {component[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <div className=" z-50 ">
        <button
          onClick={prevSlide}
          className="absolute rounded-full lg:w-20 lg:h-20 sm:w-[100px] sm:h-[100px] lg:right-[100px] sm:bottom-[100px] sm:right-[50px] vsm:h-[60px] vvsm:h-[50px] vvsm:w-[50px] vsm:w-[60px] vvsm:bottom-[60px] vsm:bottom-[100px] vvsm:right-[5px] vsm:right-[10px] text-white flex justify-center items-center border border-yellow-300"
        >
          <BiSolidRightArrow />
        </button>
        <button
          onClick={nextSlide}
          className="absolute rounded-full lg:w-20 lg:h-20 lg:right-[200px] sm:w-[100px] sm:h-[100px] sm:bottom-[100px] sm:right-[180px] vsm:h-[60px] vsm:w-[60px] vvsm:h-[50px] vvsm:w-[50px] vvsm:bottom-[60px] vvsm:right-[70px] vsm:right-[90px] vsm:bottom-[100px] text-white flex justify-center items-center border border-yellow-300"
        >
          <BiSolidLeftArrow />
        </button>
        <div className="w-[100%] flex justify-center items-center">
          <div className="absolute flex justify-center items-center  w-[270px] h-[50px] lg:bottom-[20px] md:bottom-[60px]  sm:bottom-[50px] vvsm:bottom-[40px] sm:left-[50px] vvsm:left-[-35px] text-[#ffff] sm:text-[16px] vsm:text-[12px] vvsm:text-[10px] playfair">
            --- GALEZO AUTUMN COLLECTION
          </div>
          <div className=" flex justify-evenly items-center absolute w-[250px] h-[50px] sm:bottom-[20px] vvsm:bottom-2">
            <motion.div
              className="text-[#ffff]"
              initial={{ scale: 1 }}
              animate={{ scale: pgone === 1 ? 1.5 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              01
            </motion.div>
            <div
              className={`${pgone === 1 ? "w-16 h-[1px] bg-white" : "hidden"}`}
            ></div>
            <div
              className={`${pgtwo === 2 ? "w-16 h-[1px] bg-white" : "hidden"}`}
            ></div>
            <motion.div
              className="text-[#ffff]"
              initial={{ scale: 1 }}
              animate={{ scale: pgtwo === 2 ? 1.5 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              02
            </motion.div>
            <div
              className={`${
                pgthree === 3 ? "w-16 h-[1px] bg-white" : "hidden"
              }`}
            ></div>
            <motion.div
              className="text-[#ffff]"
              initial={{ scale: 1 }}
              animate={{ scale: pgthree === 3 ? 1.5 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              03
            </motion.div>
            <div
              className={`${pgfour === 4 ? "w-16 h-[1px] bg-white" : "hidden"}`}
            ></div>
            <motion.div
              className="text-[#ffff]"
              initial={{ scale: 1 }}
              animate={{ scale: pgfour === 4 ? 1.5 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              04
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCarousel;
