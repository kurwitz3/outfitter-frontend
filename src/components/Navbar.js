import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
          <NavLink
           to='/'
           exact
           className='navLink'
           activeClassName="active"
          >Home</NavLink>

          <NavLink
           to='/NewMexicoHunts'
           exact
           className='navLink'
           activeClassName="active"
          >New Mexico Hunts</NavLink>
          
          <NavLink
           to='/TexasHunts'
           exact
           className='navLink'
           activeClassName="active"
          >Texas Hunts</NavLink>
          
          <NavLink
           to='/Rates'
           exact
           className='navLink'
           activeClassName="active"
          >Rates</NavLink>
          
          <NavLink
           to='/Reviews'
           exact
           className='navLink'
           activeClassName="active"
          >Reviews</NavLink>
        </div>
    )
}

export default Navbar