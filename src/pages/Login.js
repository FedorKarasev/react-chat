import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e) {
      setError(e);
      console.warn(e);
    }
  };

  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>ChatApp</span>
        <span className='title'>Log in</span>
        <form onSubmit={handleSubmit}>
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <button>Log in</button>
          {error && <span>Failed to register</span>}
        </form>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  );
};
