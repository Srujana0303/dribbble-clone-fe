import React, { useState } from 'react';
import "../components/Navbar.css"
import Prof from "../components/images/data.jpeg";
import Search from "../components/images/search.svg";
import dribbbleLogo from '../components/images/dribbbleLogo.png';

const Navbar = () => {
  return (
    <div className='header'>
      <div>
          <img className='header-logo' src={dribbbleLogo}/>
      </div>
      <div className='header-menu'>
          <div className='p-f200'>Find designers</div>
          <div className='p-f200'>Inspiration</div>
          <div className='p-f200'>Courses</div>
          <div className='p-f200'>Jobs</div>
          <div className='p-f200'>Go pro</div>
      </div>
      <div className='header-search'>
        <div class="search-container">
          <img src={Search} class="icon"/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <img className='header-prof' src={Prof} alt="" />
    </div>
  )
}
export default Navbar;