import React from 'react';
import Img from '../images/img.png';
import Attach from '../images/attach.png';

export const Input = () => {
  return (
    <div className='message-input'>
      <input type='text' placeholder='Your message...' />
      <div className='send'>
        <img src={Attach} />
        <input type='file' style={{ display: 'none' }} id='messageFile' />
        <label htmlFor='messageFile'>
          <img src={Img} />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
