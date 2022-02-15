import React from "react";

// import AppStore from "../assets/images/ios_download.png";
// import GooglePlay from "../assets/images/android_download.png";
import mobileAd from "../assets/images/mobile-phone.png";

import '../assets/css/home_layout.css';


const MobileApp = () => {
  return (
    <div className=" mobile_ad_section my-5">
      <img src={mobileAd} alt=""/>
    </div>
  );
};

export default MobileApp;
