import React from 'react';
import Cam from '../images/cam.png';
import Add from '../images/add.png';
import More from '../images/more.png';
import { Messages } from './Messages';
import { Input } from './Input';

export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-info'>
        <span>Jane</span>
        <div className='chat-icons'>
          <img src={Cam} />
          <img src={Add} />
          <img src={More} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
