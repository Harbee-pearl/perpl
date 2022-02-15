import React from "react";

import { specialTips } from "../data/flightdealsdata";

import '../assets/css/home_layout.css';

const SpecialTips = () => {
  return (
    <div className="row mx-auto special_tips_container my-4">
      <div className="d-flex justify-content-evenly flex-sm-wrap flex-lg-nowrap ">
        {specialTips.map((item, i) => (
          <div
            key={i}
            className="d-flex flex-column mx-2 my-2 my-sm-3 my-lg-4  special_tips_wrapper"
            style={{
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${item.image})  `,
            }}
          >
            <h2 className="special_tips_title">{item.title}</h2>
            <p className="special_tips_text" align="justify">
              {item.text}
            </p>
            <button className="special_tips_button">{item.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialTips;
