import React from "react";

import '../assets/css/home_layout.css';
import { whyWeAreTheBestData } from "../data/whywearethethebest";

const WhyWeAreTheBest = () => {
  return (
    <div className="row mx-auto why_we_are_the_best_container my-4">
      <h3 className=" m-2">Why we are the best</h3>
      <div className="  d-flex justify-content-between flex-sm-wrap flex-lg-nowrap">
        {whyWeAreTheBestData.map((item, i) => (
          <div key={i} className="  d-flex flex-column why_we_are_the_best_wrapper m-2 p-3">
            <div className="text-center">
              <img src={item.avatar} alt=''/>
            </div>
            <h4 className="why_we_are_the_best_title">{item.title}</h4>
            <p className="why_we_are_the_best_text" align="justify">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWeAreTheBest;
