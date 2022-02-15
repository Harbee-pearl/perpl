import React from "react";

import Ad1 from '../assets/images/Rectangle1.jpg'
import Ad2 from '../assets/images/Rectangle2.jpg'
import Ad3 from '../assets/images/Rectangle3.jpg'

import '../assets/css/home_layout.css';



const AdImages = () => {
  return (
    <div className="row mx-auto ad_images_container   my-4">
      <div className="d-flex justify-content-between flex-sm-wrap flex-lg-nowrap  ">
        <div className="col-sm-6 col-md-4 ad_images_wrapper mt-2 mt-sm-4 mt-lg-2"><img className="ad_images" src={Ad1} alt="" /></div>
        <div className="col-sm-6 col-md-4 ad_images_wrapper mt-2 mt-sm-4 mt-lg-2"><img className="ad_images" src={Ad2} alt="" /></div>
        <div className="col-sm-6 col-md-4 ad_images_wrapper mt-2 mt-sm-4 mt-lg-2"><img className="ad_images" src={Ad3} alt="" /></div>
      </div>
    </div>
  );
};

export default AdImages;
