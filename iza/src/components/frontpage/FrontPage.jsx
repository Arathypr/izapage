// import React, { useState } from "react";
// import "./FrontPage.css";

// import image1 from "../../assets/pagetwobg_xl.png";
// import image2 from "../../assets/pagefourbg_xl.png";
// import image3 from "../../assets/pagethreebg_xl.png";

// const FrontPage = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

// const FrontPage = () => {
//   return (
//     <figure id="blinds-window">
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image1} alt="" className="first" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
// <img src={image2} alt="" className="second" />
//     </figure>
//   );
// };
// export default FrontPage;
// import React, { useState } from "react";
// import "./FrontPage.css";

// import image1 from "../../assets/pagethreebg_xl.png";
// import image2 from "../../assets/pagefourbg_xl.png";
// import image3 from "../../assets/pagethreebg_xl.png";

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
      <div className="container">
        <div className={`blinds-window ${isClicked ? "clicked" : ""}`}>
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
          <img src={image1} alt="" className="first" />
        </div>
      </div>

      <div className="container">
        <div className={`blinds-window ${isClicked ? "clicked" : ""}`}>
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
          <img src={image2} alt="" className="second" />
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button onClick={handleClick}>Toggle Animation</button>
      </div>
    </div>
  );
};

export default FrontPage;
