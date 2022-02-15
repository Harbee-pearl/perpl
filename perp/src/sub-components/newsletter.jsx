import React from 'react';
import Envelope from '../assets/images/envelope.png'

import '../assets/css/home_layout.css';

const Newsletter = () => {
  return <div className=' row d-flex flex-wrap newsletter_section mx-auto align-items-center'>
      <div className='col-3 mx-auto envelope_avatar'>
          <img src={Envelope} alt='' />
      </div>
      <div className='col-5 mx-auto '>
        <h2 className='newsletter_heading'>You want to save when you travel?</h2>
        <p className='newsletter_text'>Yes, I'd like to save on travel! Please send me exclusive deals and updates.</p>
        <div className='input-group w-100'>
        <input placeholder='Your email address' className='newsletter_input' />
        <button className='newsletter_btn btn px-4 py-2'>Subscribe</button></div>
      </div>
  </div>;
};

export default Newsletter;
