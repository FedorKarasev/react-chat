import React, { useContext, useState } from 'react';
import { collection, query, where, getDocs, getDoc, doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

export const Search = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const searchUser = async (userName) => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('name', '==', userName));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => setUser(doc.data()));
    } catch (error) {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
    searchUser(e.target.value);
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        console.log('currentUser', currentUser);
        console.log('user', user);
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            name: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            name: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      }
    } catch (err) {}
  };

  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Search...' onChange={handleChange}></input>
      </div>
      {user && (
        <div className='user-chat' onClick={handleSelect}>
          <img src={user.photoURL} />
          <div className='user-chat-info'>
            <span>{user.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};
