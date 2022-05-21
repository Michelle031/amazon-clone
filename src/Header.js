import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { useStateValue } from './StateProvider';
import "./Header.css";
import { auth } from './firebase';
import { signOut } from "firebase/auth";

function Header() {
  const [{basket, user}] = useStateValue();
  const login = () => {
    if (user) {
      signOut(auth)
      .then(() => {
       //logged out
      }).catch (e => alert(e.message));
    }
  }
  return (
    <nav className='header'>
      <Link to="/">
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <div className='header__search'>
        <input className='header__input' type="text" />
        <HiOutlineSearch className='header__searchicon'/>
      </div>
      <div className="header__nav">
        <Link to={ !user && "/login"} className='header__link'>
          <div onClick={login} className='header__option'>
            <span>Hello {user?.email}</span>
            <span>Sign {user ? "Out" : "In" }</span>
          </div>
        </Link>
        <Link to="/login" className='header__link'>
          <div  className='header__option'>
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
        <Link to="/" className='header__link'>
          <div className='header__option'>
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className='header__link'>
          <div className='header__basket'>
            <FaShoppingCart  />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
