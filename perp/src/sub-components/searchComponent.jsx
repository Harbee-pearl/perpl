import React, { useState } from "react";

import "../assets/css/home_layout.css";
import { FaPlus, FaMinus, FaCheck} from "react-icons/fa";
import AirplaneIcon from "../assets/icons/airplane_icon.png";
import PersonIcon from "../assets/icons/person_icon.png";
import TravellerIcon from "../assets/icons/traveller_icon.png";
import FromIcon from "../assets/icons/from_location.png";
import ToIcon from "../assets/icons/to_location.png";
import CalendarIcon from "../assets/icons/calendar.png";
import DirectionIcon from "../assets/icons/direction.png";

const SearchComponent = () => {
  // states for the trip dropdown
  const [activeTrip, setActiveTrip] = useState("Round-trip");
  const [isOneWayTrip, setIsOneWayTrip] = useState(false);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [isMultiCityTrip, setIsMultiCityTrip] = useState(false);

  // states for the flight class dropdown
  const [activeClass, setActiveClass] = useState("Economy");
  const [isEconomy, setIsEconomy] = useState(true);
  const [isPremiumEconomy, setIsPremiumEconomy] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const [isFirstClass, setIsFirstClass] = useState(false);

  // states for the passenger tickets
  const [totalPassenger, setTotalPassenger] = useState(1);
  const [adults, setAdults] = useState(1);

  return (
    <div className="flight_search_container d-flex flex-column">
        <span className="flights_title">
          <img src={AirplaneIcon} /> Flights
        </span>
      <div className="d-flex flight_search_dropdowns_wrapper">
        <div className="dropdown">
          <button
            className="btn btn-transparent dropdown-toggle "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="px-2">
              <img src={AirplaneIcon} alt="" />
            </span>
            {activeTrip}
          </button>
          <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li
              onClick={() => {
                setIsOneWayTrip(true);
                setIsRoundTrip(false);
                setIsMultiCityTrip(false);
                setActiveTrip("One-way");
              }}
              className={
                isOneWayTrip ? "p-2 dropdown-item active" : "p-2 dropdown-item"
              }
            >
              One-way
              {isOneWayTrip ? (
                <i className="active_icon">
                  <FaCheck />
                </i>
              ) : null}
            </li>
            <li
              onClick={() => {
                setIsOneWayTrip(false);
                setIsRoundTrip(true);
                setIsMultiCityTrip(false);
                setActiveTrip("Round-trip");
              }}
              className={
                isRoundTrip ? "p-2 dropdown-item active" : "p-2 dropdown-item"
              }
            >
              Round-trip
              {isRoundTrip ? (
                <i className="active_icon">
                  <FaCheck />
                </i>
              ) : null}
            </li>
            <li
              onClick={() => {
                setIsOneWayTrip(false);
                setIsRoundTrip(false);
                setIsMultiCityTrip(true);
                setActiveTrip("Multi-City");
              }}
              className={
                isMultiCityTrip
                  ? "p-2 dropdown-item active"
                  : "p-2 dropdown-item"
              }
            >
              Multi-city
              {isMultiCityTrip ? (
                <i className="active_icon">
                  <FaCheck />
                </i>
              ) : null}
            </li>
          </ul>
        </div>
        <div className="dropdown ">
          <button
            className="btn btn-transparent dropdown-toggle "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <span className="px-2">
              <img src={PersonIcon} alt="" />
            </span>
            {totalPassenger} Passenger{totalPassenger > 1 ? "s" : null}
          </button>
          <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li className="px-2 py-4 dropdown-item">
              Adults
              <span className="counter_wrapper ">
                <i className="counter_components counter_decrease " >
                  <FaMinus />
                </i>
                {adults}
                <i className="counter_components counter_increase " >
                  <FaPlus />
                </i>
              </span>
            </li>
            <li className="p-2 dropdown-item d-flex justify-content-between align-items-center">
              <p>Children <span className="text-muted d-block muted_dropdown_text">Aged 2 - 11</span></p>
              <span className="counter_wrapper ">
                <i className="counter_components counter_decrease " >
                  <FaMinus />
                </i>
                {adults}
                <i className="counter_components counter_increase " >
                  <FaPlus className="" />
                </i>
              </span>
              {/* <span className="text-muted">Aged 2 - 11</span> */}
              
            </li>
            <li className="p-2 dropdown-item d-flex justify-content-between align-items-center">
            <p>Infants <span className="text-muted d-block muted_dropdown_text">In seat</span></p>
              <span className="counter_wrapper ">
                <i className="counter_components counter_decrease " >
                  <FaMinus />
                </i>
                {adults}
                <i className="counter_components counter_increase " >
                  <FaPlus className="" />
                </i>
              </span>
              {/* <span className="text-muted">Aged 2 - 11</span> */}
              
            </li>
            <li className="p-2 dropdown-item d-flex justify-content-between align-items-center">
            <p>Infants <span className="text-muted d-block muted_dropdown_text">On lap</span></p>
              <span className="counter_wrapper ">
                <i className="counter_components counter_decrease " >
                  <FaMinus />
                </i>
                {adults}
                <i className="counter_components counter_increase " >
                  <FaPlus className="" />
                </i>
              </span>
              {/* <span className="text-muted">Aged 2 - 11</span> */}
              
            </li>
            <button className="btn text-danger  "data-bs-toggle="dropdown">Cancel</button>
            <button className="btn text-success "            data-bs-auto-close="outside">Done</button>
          </ul>
        </div>
        <div className="dropdown ">
          <button
            className="btn btn-transparent dropdown-toggle "
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="px-2">
              <img src={TravellerIcon} alt="" />
            </span>
            {activeClass}
          </button>
          <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
            <li
              onClick={() => {
                setIsEconomy(true);
                setIsPremiumEconomy(false);
                setIsBusiness(false);
                setIsFirstClass(false);
                setActiveClass("Economy");
              }}
              className={
                isEconomy ? "p-2 dropdown-item active" : "p-2 dropdown-item"
              }
            >
              Economy
              {isEconomy ? (
                <i className="active_icon">
                  <FaCheck />
                </i>
              ) : null}
            </li>
            <li
              onClick={() => {
                setIsEconomy(false);
                setIsPremiumEconomy(true);
                setIsBusiness(false);
                setIsFirstClass(false);
                setActiveClass("Premium Economy");
              }}
              className={
                isPremiumEconomy
                  ? "p-2 dropdown-item active"
                  : "p-2 dropdown-item"
              }
            >
              Premium Economy
              {isPremiumEconomy ? (
                <i className="active_icon">
                  <FaCheck />
                </i>
              ) : null}
            </li>
            <li
              onClick={() => {
                setIsEconomy(false);
                setIsPremiumEconomy(false);
                setIsBusiness(true);
                setIsFirstClass(false);
                setActiveClass("Business");
              }}
              className={
                isBusiness ? "p-2 dropdown-item active" : "p-2 dropdown-item"
              }
            >
              Business
              {isBusiness ? (
                <i className="active_icon">
                  <FaCheck />
                </i>
              ) : null}
            </li>
            <li
              onClick={() => {
                setIsEconomy(false);
                setIsPremiumEconomy(false);
                setIsBusiness(false);
                setIsFirstClass(true);
                setActiveClass("First class");
              }}
              className={
                isFirstClass ? "p-2 dropdown-item active" : "p-2 dropdown-item"
              }
            >
              First Class
              {isFirstClass ? (
                <i className="active_icon">
                  <FaCheck />
                </i>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className=" mx-2 ">
          <input type="text"  className="form-control mx-1"/>

          <img className="mx-1" src={DirectionIcon} alt='' />
          <input type="text"  className="form-control mx-1"/>
        </div>
        {/* <div className=" mx-2"> */}
        <div class="mx-2 input-group">
  <input type="text"  className="form-control"/>
  <input type="text"  className="form-control"/>
</div>
        {/* </div> */}
        <button className=" mx-2 flight_search_button btn ">Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
