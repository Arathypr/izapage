// import React from "react";
// // image1
// import image11 from "../../assets/image1/image1row1.png";
// import image12 from "../../assets/image1/image1row2.png";
// import image13 from "../../assets/image1/image1row3.png";
// import image14 from "../../assets/image1/image1row4.png";
// import image15 from "../../assets/image1/image1row5.png";
// import image16 from "../../assets/image1/image1row6.png";

// // image 2
// import image21 from "../../assets/image2/image2column1.png";
// import image22 from "../../assets/image2/image2column2.png";
// import image23 from "../../assets/image2/image2column3.png";
// import image24 from "../../assets/image2/image2column4.png";
// import image25 from "../../assets/image2/image2column5.png";
// import image26 from "../../assets/image2/image2column6.png";

// // image 3
// import image31 from "../../assets/image3/image3column1.png";
// import image32 from "../../assets/image3/image3column2.png";
// import image33 from "../../assets/image3/image3column3.png";
// import image34 from "../../assets/image3/image3column4.png";
// import image35 from "../../assets/image3/image3column5.png";
// import image36 from "../../assets/image3/image3column6.png";

// //
// import image41 from "../../assets/image4/image4column1.png";
// import image42 from "../../assets/image4/image4column2.png";
// import image43 from "../../assets/image4/image4column3.png";
// import image44 from "../../assets/image4/image4column4.png";
// import image45 from "../../assets/image4/image4column5.png";
// import image46 from "../../assets/image4/image4column6.png";

// import "./LandingPage.css";

// const LandingPage = () => {
//   return (
//     <>
//       <div className="image-row-container">
//         <img src={image11} alt="" className="single1-image" />
//         <img src={image12} alt="" className="single-image" />
//         <img src={image13} alt="" className="single-image" />
//         <img src={image14} alt="" className="single-image" />
//         <img src={image15} alt="" className="single-image" />
//         <img src={image16} alt="" className="single-image" />
//       </div>
//       <div className="image-row-container">
//         <img src={image21} alt="" className="single1-image" />
//         <img src={image22} alt="" className="single-image" />
//         <img src={image23} alt="" className="single-image" />
//         <img src={image24} alt="" className="single-image" />
//         <img src={image25} alt="" className="single-image" />
//         <img src={image26} alt="" className="single-image" />
//       </div>
//       <div className="image-row-container">
//         <img src={image31} alt="" className="single1-image" />
//         <img src={image32} alt="" className="single-image" />
//         <img src={image33} alt="" className="single-image" />
//         <img src={image34} alt="" className="single-image" />
//         <img src={image35} alt="" className="single-image" />
//         <img src={image36} alt="" className="single-image" />
//       </div>
//       <div className="image-row-container">
//         <img src={image41} alt="" className="single1-image" />
//         <img src={image42} alt="" className="single-image" />
//         <img src={image43} alt="" className="single-image" />
//         <img src={image44} alt="" className="single-image" />
//         <img src={image45} alt="" className="single-image" />
//         <img src={image46} alt="" className="single-image" />
//       </div>
//     </>
//   );
// };

// export default LandingPage;

// import React from "react";
// import Slider from "react-slick";
// import "react-slick/slick/slick.css";
// import "react-slick/slick/slick-theme.css";

// // // image1
// import image11 from "../../assets/image1/image1row1.png";
// import image12 from "../../assets/image1/image1row2.png";
// import image13 from "../../assets/image1/image1row3.png";
// import image14 from "../../assets/image1/image1row4.png";
// import image15 from "../../assets/image1/image1row5.png";
// import image16 from "../../assets/image1/image1row6.png";

// // // image 2
// import image21 from "../../assets/image2/image2column1.png";
// import image22 from "../../assets/image2/image2column2.png";
// import image23 from "../../assets/image2/image2column3.png";
// import image24 from "../../assets/image2/image2column4.png";
// import image25 from "../../assets/image2/image2column5.png";
// import image26 from "../../assets/image2/image2column6.png";

// // // image 3
// import image31 from "../../assets/image3/image3column1.png";
// import image32 from "../../assets/image3/image3column2.png";
// import image33 from "../../assets/image3/image3column3.png";
// import image34 from "../../assets/image3/image3column4.png";
// import image35 from "../../assets/image3/image3column5.png";
// import image36 from "../../assets/image3/image3column6.png";

// // image4
// import image41 from "../../assets/image4/image4column1.png";
// import image42 from "../../assets/image4/image4column2.png";
// import image43 from "../../assets/image4/image4column3.png";
// import image44 from "../../assets/image4/image4column4.png";
// import image45 from "../../assets/image4/image4column5.png";
// import image46 from "../../assets/image4/image4column6.png";

// // Import all the images as before

// const LandingPage = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <img src={image11} alt="" className="single1-image" />
//         <img src={image12} alt="" className="single-image" />
//         <img src={image13} alt="" className="single-image" />
//         <img src={image14} alt="" className="single-image" />
//         <img src={image15} alt="" className="single-image" />
//         <img src={image16} alt="" className="single-image" />
//       </div>
//       <div>
//         <img src={image21} alt="" className="single1-image" />
//         <img src={image22} alt="" className="single-image" />
//         <img src={image23} alt="" className="single-image" />
//         <img src={image24} alt="" className="single-image" />
//         <img src={image25} alt="" className="single-image" />
//         <img src={image26} alt="" className="single-image" />
//       </div>
//       <div>
//         <img src={image31} alt="" className="single1-image" />
//         <img src={image32} alt="" className="single-image" />
//         <img src={image33} alt="" className="single-image" />
//         <img src={image34} alt="" className="single-image" />
//         <img src={image35} alt="" className="single-image" />
//         <img src={image36} alt="" className="single-image" />
//       </div>
//       <div>
//         <img src={image41} alt="" className="single1-image" />
//         <img src={image42} alt="" className="single-image" />
//         <img src={image43} alt="" className="single-image" />
//         <img src={image44} alt="" className="single-image" />
//         <img src={image45} alt="" className="single-image" />
//         <img src={image46} alt="" className="single-image" />
//       </div>
//     </Slider>
//   );
// };

// export default LandingPage;

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TweenMax } from "gsap";

import "./LandingPage.css";

// // image1
import image11 from "../../assets/image1/image1row1.png";
import image12 from "../../assets/image1/image1row2.png";
import image13 from "../../assets/image1/image1row3.png";
import image14 from "../../assets/image1/image1row4.png";
import image15 from "../../assets/image1/image1row5.png";
import image16 from "../../assets/image1/image1row6.png";

// // image 2
import image21 from "../../assets/image2/image2column1.png";
import image22 from "../../assets/image2/image2column2.png";
import image23 from "../../assets/image2/image2column3.png";
import image24 from "../../assets/image2/image2column4.png";
import image25 from "../../assets/image2/image2column5.png";
import image26 from "../../assets/image2/image2column6.png";

// // image 3
import image31 from "../../assets/image3/image3column1.png";
import image32 from "../../assets/image3/image3column2.png";
import image33 from "../../assets/image3/image3column3.png";
import image34 from "../../assets/image3/image3column4.png";
import image35 from "../../assets/image3/image3column5.png";
import image36 from "../../assets/image3/image3column6.png";

// image4
import image41 from "../../assets/image4/image4column1.png";
import image42 from "../../assets/image4/image4column2.png";
import image43 from "../../assets/image4/image4column3.png";
import image44 from "../../assets/image4/image4column4.png";
import image45 from "../../assets/image4/image4column5.png";
import image46 from "../../assets/image4/image4column6.png";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    const imageContainers = document.getElementsByClassName(
      "image-row-container"
    );
    const columns = imageContainers[oldIndex].children;
    for (let i = 0; i < columns.length; i++) {
      const blinds = columns[i].getElementsByClassName("blind");
      for (let j = 0; j < blinds.length; j++) {
        const delay = (j + 1) * 100;
        TweenMax.to(blinds[j], 0.5, { rotationY: "90", delay: delay / 1000 });
      }
    }
  };

  const handleAfterChange = (currentIndex) => {
    setCurrentSlide(currentIndex);
  };

  return (
    <div>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
      >
        <div className="image-row-container">
          <img src={image11} alt="" className="single1-image" />
          <img src={image12} alt="" className="single-image" />
          <img src={image13} alt="" className="single-image" />
          <img src={image14} alt="" className="single-image" />
          <img src={image15} alt="" className="single-image" />
          <img src={image16} alt="" className="single-image" />
        </div>
        <div className="image-row-container">
          <img src={image21} alt="" className="single1-image" />
          <img src={image22} alt="" className="single-image" />
          <img src={image23} alt="" className="single-image" />
          <img src={image24} alt="" className="single-image" />
          <img src={image25} alt="" className="single-image" />
          <img src={image26} alt="" className="single-image" />
        </div>
        <div className="image-row-container">
          <img src={image31} alt="" className="single1-image" />
          <img src={image32} alt="" className="single-image" />
          <img src={image33} alt="" className="single-image" />
          <img src={image34} alt="" className="single-image" />
          <img src={image35} alt="" className="single-image" />
          <img src={image36} alt="" className="single-image" />
        </div>
      </Carousel>
    </div>
  );
};

export default LandingPage;
