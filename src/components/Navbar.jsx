import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faMagnifyingGlass,faCartShopping,faBars } from '@fortawesome/free-solid-svg-icons';

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

       <div className="nav-sign border">
        <p><span>Hello, sign in</span></p>
        <p className="nav-second">Account & Lists</p>
       </div>
       <div className="nav-return border">
        <p><span>Returns</span></p>
        <p className="nav-second">& Orders</p>
       </div>

       <div className="nav-cart border">
       <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
        Cart
       </div>
</div>
       <div className="panel">
        <div className="panel-all">
        <FontAwesomeIcon icon={faBars} />
            All
        </div>
        <div className="panel-ops">
            <p>
                Today's Deals
            </p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
        </div>
        <div className="paneld-deals">
            Shop deals in Electronics
        </div>
       </div>
        
    </>
  );
}

export default Navbar;
