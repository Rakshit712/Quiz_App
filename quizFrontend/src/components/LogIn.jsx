import React, { useState } from 'react';
import axios from 'axios';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter all required fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/users', { email, password });
      if (response.data.success) {
        alert('Logged in Successfully');
        // Redirect or perform any action after successful login
      } else {
        alert('Invalid Email or Password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again later.');
    }
  };

  return (
    <>
      <div className='mainnn'>
        <h1>Login Page</h1>
        <div className='inBox'>
          <label>Enter your Email</label>
          <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input'
            required
            type='text'
          />
          <label>Enter your Password</label>
          <input
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            required
            type='password'
          />
          <button className='button2' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default LogIn;