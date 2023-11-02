import React from "react";
import FirstPage from "./pages/firstpage/FirstPage";
import SecondPage from "./pages/secondpage/SecondPage";
import ThirdPage from "./pages/thirdpage/ThirdPage";
import FourtPage from "./pages/fourthpage/FourthPage";
import FifthPage from "./pages/fifthpage/FifthPage";
import SixthPage from "./pages/sixthpage/SixthPage";
import LandingPageCarousel from "./components/landingpage_content/carousel/landingPageCarousel";
import PageFive from "./pages/pagefive/PageFive";

import LandingPage from "./pages/LandingPageNew/LandingPage";
import FrontPage from "./components/frontpage/FrontPage";

const App = () => {
  return (
    <>
      <div className="">
        <div className=" snap-y snap-mandator1 overflow-scroll h-[100vh] no-scrollbar">
          {/* <LandingPageCarousel /> */}
          {/* <LandingPage /> */}
          <FrontPage />
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <FourtPage />
          <FifthPage />
          <PageFive />
        </div>
      </div>
    </>
  );
};

export default App;
