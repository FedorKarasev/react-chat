import React from 'react';

export const Chats = () => {
  return (
    <div className='chats'>
      <div className='user-chat'>
        <img src='https://images.pexels.com/photos/15460077/pexels-photo-15460077.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
        <div className='user-chat-info'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='user-chat'>
        <img src='https://images.pexels.com/photos/15460077/pexels-photo-15460077.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
        <div className='user-chat-info'>
          <span>David</span>
          <p>By</p>
        </div>
      </div>
      <div className='user-chat'>
        <img src='https://images.pexels.com/photos/15460077/pexels-photo-15460077.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
        <div className='user-chat-info'>
          <span>Maria</span>
          <p>Love</p>
        </div>
      </div>
    </div>
  );
};
