import React, { useState, useEffect } from "react";
import very_small_device from "../../../assets/pagetwobg_vsm.png";
import ssm_img from "../../../assets/pagetwobg_ssm.png";
import sm_img from "../../../assets/pagetwobg_sm.png";
import md_img from "../../../assets/pagetwobg_md.png";
import Landingpageone from "../../../assets/pagetwobg_xl.png";
import lg_img from "../../../assets/pagetwobg_lg.png";
import "./styles.css"; //

const Page2 = ({ isVisible }) => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
      const rays = document.querySelectorAll(".disappearing-ray");
      rays.forEach((ray, index) => {
        if (isVisible) {
          ray.style.animationDelay = `${index * 0.2}s`;
        } else {
          ray.style.animationDelay = "0s";
        }
      });
    }
  }, [animationTriggered, isVisible]);

  const rayInitialClass = isVisible ? "ray-line" : "";
  return (
    <div>
      {/* vlg device */}
      <img
        src={Landingpageone}
        alt=""
        className="absolute w-[100%] h-screen  vvsm:hidden xxl:block "
      />
      {/* large device */}
      <img
        src={lg_img}
        alt=""
        className="absolute w-[100%] h-screen  vvsm:hidden lg:block xxl:hidden "
      />
      {/* medium device */}
      <img
        src={md_img}
        alt=""
        className="absolute w-[100%] h-screen  vvsm:hidden md:block lg:hidden"
      />
      {/* small device */}
      <img
        src={sm_img}
        alt=""
        className="absolute w-[100%] h-screen  vvsm:hidden sm:block md:hidden"
      />
      {/* small small device */}
      <img
        src={ssm_img}
        alt=""
        className="absolute w-[100%] h-screen  vvsm:hidden ssm:block sm:hidden"
      />
      {/* vsm */}
      <img
        src={very_small_device}
        alt=""
        className="absolute w-[100%] h-screen ssm:hidden"
      />
      <div
        className={`absolute h-screen w-[20%] left-[0%] border-r-2 ${
          isVisible ? "disappearing-div" : "disappearing-div exit"
        }`}
      ></div>
      <div
        className={`absolute h-screen w-[20%] left-[20%] border-r-2 ${
          isVisible ? "disappearing-div" : "disappearing-div exit"
        }`}
      ></div>
      <div
        className={`absolute h-screen w-[20%] left-[40%] border-r-2 ${
          isVisible ? "disappearing-div" : "disappearing-div exit"
        }`}
      ></div>
      <div
        className={`absolute h-screen w-[20%] left-[60%] border-r-2 ${
          isVisible ? "disappearing-div" : "disappearing-div exit"
        }`}
      ></div>
      <div
        className={`absolute h-screen w-[20%] left-[80%]  ${
          isVisible ? "disappearing-div" : "disappearing-div exit"
        }`}
      ></div>

      {/* <div className="ray-container">
        <div
          className={`ray ray-1 ${
            animationTriggered ? "disappearing-ray" : ""
          } ${rayInitialClass}`}
        ></div>
        <div
          className={`ray ray-2 ${
            animationTriggered ? "disappearing-ray" : ""
          } ${rayInitialClass}`}
        ></div>
        <div
          className={`ray ray-3 ${
            animationTriggered ? "disappearing-ray" : ""
          } ${rayInitialClass}`}
        ></div>
        <div
          className={`ray ray-4 ${
            animationTriggered ? "disappearing-ray" : ""
          } ${rayInitialClass}`}
        ></div>
        <div
          className={`ray ray-5 ${
            animationTriggered ? "disappearing-ray" : ""
          } ${rayInitialClass}`}
        ></div>
        <div
          className={`ray ray-6 ${
            animationTriggered ? "disappearing-ray" : ""
          } ${rayInitialClass}`}
        ></div>
      </div> */}

      <div
        className=" justify-center items-center w-[400px] h-[50px] absolute rotate-90 text-[#ffff] lg:top-[200px]  lg:left-[130px] 
                                                                                                          md:top-[250px]  md:left-[-20px]  
                                                                                                           sm:top-[200px] sm:left-[-50px] 
                                                                                                           vvsm:top-[200px] vvsm:left-[-150px] 
                                                                                                           vsm:top-[250px] vsm:left-[-130px]
                                                                                                          ssm:left-[-130px] sm:text-[70px] vsm:text-[50px] vvsm:text-[40px] playfair"
      >
        ELISE X GAL
      </div>
      {/* <div className="text-container">
        <span className="text-part">ELISE X GAL</span>
      </div> */}
    </div>
  );
};

export default Page2;
