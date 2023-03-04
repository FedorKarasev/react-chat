import React, { useState } from 'react';
import Add from '../images/addAvatar.png';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const file = e.currentTarget.file.files[0];

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'stage_changed',
        (snapshot) => {},
        (error) => {
          setError(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await updateProfile(response.user, {
                displayName: name,
                photoURL: downloadURL,
              });

              await setDoc(doc(db, 'users', response.user.uid), {
                uid: response.user.uid,
                name,
                email,
                photoURL: downloadURL,
              });

              await setDoc(doc(db, 'userChats', response.user.uid), {});
            })
            .then(() => navigate('/'));
        }
      );
    } catch (e) {
      setError(e);
      console.warn(e);
    }
  };

  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>ChatApp</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <input style={{ display: 'none' }} type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} />
            <span>Add and avatar</span>
          </label>
          <button>Sign Up</button>
          {error && <span>Failed to register</span>}
        </form>
        <p>
          Already have an account? <Link to='/login'>LogIn</Link>
        </p>
      </div>
    </div>
  );
};
