import React from 'react';

import '../assets/css/home_layout.css';
import {Hotels} from '../data/flight_hoteldata';


const HotelsInNigeria = () => {
  return <div className="search_wrapper mx-auto my-4">
            <h3 className="search_title mx-3">Cheap Hotels in Popular destinations</h3>
            <section className=" row mx-auto py-4">
        <div className="  d-flex justify-content-center flex-wrap   mx-auto">
          {Hotels.map((content, i) => (
            <div className=" col-sm-6 col-md-6 col-lg-3 my-sm-3 my-md-2 my-lg-0  px-2 " key={i}>
              <h4 className="my-2 top_footer_titles">{content.title}</h4>
              {content.subtitle.map((subtitle, i) => (
                <li className="top_footer_subtitles my-4" key={i}>
                  {subtitle.desc}
                </li>
              ))}
            </div>
          ))}
        </div>
      </section>


  </div>;
};

export default HotelsInNigeria;
