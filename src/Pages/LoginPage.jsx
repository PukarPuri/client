import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../molecules/Navbar';
import '../Styles/Login.scss';




function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username or Email:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
            <Link to="/forgot-password" style={{ display: 'block', marginTop: '5px', textAlign: 'right', color: '#007bff', textDecoration: 'none' }}>Forgot?</Link>
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Sign In
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Don't have an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</Link></p>
      </div>
    </>
  );
}

export default LoginPage;
