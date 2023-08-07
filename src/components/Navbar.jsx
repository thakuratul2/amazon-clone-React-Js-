import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
        <select className='search'>
            <option>All</option>
        </select>
        <input placeholder='Search Amazon' className='search-input' />
        <div className="search-icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
            
                </div>
       </div>

        </div>
    </>
  );
}

export default Navbar;
