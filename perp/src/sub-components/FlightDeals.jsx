import React from "react";

import { flightdealsData } from "../data/flightdealsdata";

import '../assets/css/home_layout.css';


const FlightDeals = () => {
  return (
    <div className="row mx-auto flight_deals_container  my-4">
      <h3 className="mx-2">Flight Deals of the Day</h3>
      <div className="d-flex justify-content-evenly flex-sm-wrap flex-lg-nowrap ">
        {flightdealsData.map((deal, i) => (
          <div key={i} className="flight_deals my-2 mx-sm-4 mx-md-2" style={{backgroundImage: ` url(${deal.image})  `}} >
            {/* <div className="airline_icon" >{deal.icon}</div> */}
            {/* <img src={deal.image} alt="" className="flight_deals_image" /> */}
              <div className="flight_deals_text_wrapper">
              <div className="flight_deals_text_wrapper2">
            <span className="flight_deals_text location_text ">
              {deal.location}
            </span>
            <span className="flight_deals_text date_text">{deal.date}</span>
            <span className="flight_deals_text price_text">{deal.price}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDeals;
