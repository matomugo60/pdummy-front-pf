import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Petfinder
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/pets'>
                Pets
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/your-pets'>
                Your Pets
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav'>
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Log In
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link className='nav-link' to='/signup'>
                Register
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
