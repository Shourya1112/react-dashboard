import React from 'react';
import searchIcon from "../assets/icons/search-icon.svg";
import bellIcon from "../assets/icons/bell.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className='header'>
      <h2 className='header--text'>Dashboard</h2>
      <div className='header-uti'>
        <input
          placeholder='Search...'
          type='text'
          className="searchbar"
        />
        <img src={ searchIcon } alt='icon' className='search--icon' />
        <img src={ bellIcon } alt='icon' className='bellicon' />
        <div className='profile'>
        </div>
      </div>
    </div>
  )
}

export default Header;