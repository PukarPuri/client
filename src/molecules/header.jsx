import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <header style={{ backgroundColor: '#fff', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#" style={{ display: 'inline-block', marginRight: '20px' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" style={{ fill: '#007bff' }}>
              <path d="M10 20h10v10h-10v-10zM20 10h10v10h-10v-10zM30 20h10v10h-10v-10z" />
            </svg>
          </a>
          <nav style={{ display: 'flex' }}>
            <a href="#" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>Home</a>
            <a href="#" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>Properties</a>
            <a href="#" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>Wishlist</a>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Why Choose Us</a>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/register">
            <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', marginRight: '10px', cursor: 'pointer' }}>
              Register
            </button>
          </Link>
          <Link to="/login">
            <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Log In
            </button>
          </Link>
        </div>
      </header>
      <main style={{ padding: '50px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Find Perfect Rental Homes in No Time</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.5', marginBottom: '30px', color: '#555' }}>We are the best rental home service that promises to shift you into your new home on the same day. Try us now!</p>
        <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>See How It Works</button>
      </main>
      <div style={{ position: 'relative', height: '500px', overflow: 'hidden', marginBottom: '50px' }}>
        <img src="https://picsum.photos/id/1018/1920/1080" alt="Apartment Building" style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fff', padding: '15px 30px', borderRadius: '5px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', margin: '0' }}>Let's find a perfect home for you</p>
        </div>
      </div>
      <footer style={{ backgroundColor: '#f0f0f0', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#555', margin: '0' }}>&copy; 2023 Rental Homes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Header;
