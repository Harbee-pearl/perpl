import React from "react";

import '../assets/css/home_layout.css';
import Info from "../assets/images/info.png";
import Test from "../assets/images/test.png";

const CovidInfo = () => {
  return (
    <div className="row mx-auto  covid_info my-4">
      <div className="d-flex align-items-center text-sm-center ">
        <span className="mx-1">Information for Travellers During COVID-19</span>

        <span className="mx-1">
          <img src={Info} alt="" className="px-2" />
          Covid 19 Info
        </span>
        <span className="mx-1">
          <img src={Test} alt="" className="px-2" />
          Covid 19 Tests
        </span>
      </div>
    </div>
  );
};

export default CovidInfo;
