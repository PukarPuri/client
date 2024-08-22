import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#f2f2f2', padding: '1rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://i.ibb.co/mG611g1/house-icon.png"
          alt="House Icon"
          style={{ height: '40px' }}
        />
        {/* <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', marginLeft: '1rem' }}>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              Home
            </a>
          </li>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              Properties
            </a>
          </li>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              Wishlist
            </a>
          </li>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              Why Choose Us
            </a>
          </li>
        </ul> */}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button style={{ backgroundColor: '#333', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', marginRight: '1rem', cursor: 'pointer' }}>
          Register
        </button>
        <button style={{ backgroundColor: '#333', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
