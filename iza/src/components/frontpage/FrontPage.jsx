// import React, { useState } from "react";
// import "./FrontPage.css";

// import image1 from "../../assets/pagethreebg_xl.png";
// import image2 from "../../assets/pagefourbg_xl.png";

// const FrontPage = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <div>
//       <figure id="blinds-window" className={isClicked ? "clicked" : ""}>
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />
//         <img src={image1} alt="" className="first" />

//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//         <img src={image2} alt="" className="second" />
//       </figure>
//       <div
//         style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
//       >
//         <button onClick={handleClick}>Toggle Animation</button>
//       </div>
//     </div>
//   );
// };

// export default FrontPage;
// import React, { useState } from "react";
// import "./FrontPage.css";

// import image1 from "../../assets/pagethreebg_xl.png";
// import image2 from "../../assets/pagefourbg_xl.png";

// const FrontPage = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className={`blinds-window ${isClicked ? "clicked" : ""}`}>
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//           <img src={image1} alt="" className="first" />
//         </div>
//       </div>

//       <div className="container">
//         <div className={`blinds-window ${isClicked ? "clicked" : ""}`}>
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//           <img src={image2} alt="" className="second" />
//         </div>
//       </div>

//       <div
//         style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
//       >
//         <button onClick={handleClick}>Toggle Animation</button>
//       </div>
//     </div>
//   );
// };

// export default FrontPage;
// import React, { useState } from "react";
// import "./FrontPage.css";

// import image1 from "../../assets/pagethreebg_xl.png";
// import image2 from "../../assets/pagefourbg_xl.png";
// import image3 from "../../assetspagetwobg_xl.png";
// import image4 from "../../assets/pagetwobg_xl.png";

// const FrontPage = () => {
//   const [imageIndex, setImageIndex] = useState(0);
//   const images = [image1, image2, image3, image4];
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     if (imageIndex < images.length - 1) {
//       setImageIndex(imageIndex + 1);
//     } else {
//       setImageIndex(0);
//     }
//     setIsClicked(true);
//     setTimeout(() => setIsClicked(false), 2000); // Adjust the time according to your animation duration
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className={`blinds-window ${isClicked ? "clicked" : ""}`}>
//           {images.map((image, idx) => (
//             <img key={idx} src={image} alt="" className="first" />
//           ))}
//         </div>
//       </div>

//       <div
//         style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
//       >
//         <button onClick={handleClick}>Next Image</button>
//       </div>
//     </div>
//   );
// };

// export default FrontPage;
import React, { useState } from "react";
import "./FrontPage.css";

import image1 from "../../assets/pagethreebg_xl.png";
import image2 from "../../assets/pagefourbg_xl.png";

const FrontPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <figure id="blinds-window" className={isClicked ? "clicked" : ""}>
        {[...Array(20)].map((_, index) => (
          <img key={`image1-${index}`} src={image1} alt="" className="first " />
        ))}
        {[...Array(20)].map((_, index) => (
          <img key={`image2-${index}`} src={image2} alt="" className="second" />
        ))}
      </figure>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button onClick={handleClick}>Toggle Animation</button>
      </div>
    </div>
  );
};

export default FrontPage;
