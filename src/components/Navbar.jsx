import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
        <div className="navbar">
        <div className="nav-logo border">
            <div className="logo">

            </div>
            </div>
            <div className="address border">
                <p className='add-first'>Deliver to</p>

                <div className="add-icon">
                <FontAwesomeIcon icon={faLocationDot} />
                    <p className='add-second'>India</p>
                </div>
            </div>
       <div className="nav-search">
        
       </div>

        </div>
    </>
  );
}

export default Navbar;
