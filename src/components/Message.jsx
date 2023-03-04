import React from 'react';

export const Message = () => {
  return (
    <div className='message owner'>
      <div className='message-info'>
        <img src='https://images.pexels.com/photos/15460077/pexels-photo-15460077.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
        <span>30sec ago</span>
      </div>
      <div className='message-content'>
        <p>lorem ipsum dolore sit amen</p>
        <img src='https://images.pexels.com/photos/15460077/pexels-photo-15460077.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
      </div>
    </div>
  );
};
