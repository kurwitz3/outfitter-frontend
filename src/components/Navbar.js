import React from 'react'
import {NavLink} from 'react-router-dom';

const link = {
    width: '100%',
    padding: '12px',
    background: 'black',
    textDecoration: 'none',
    color: 'white',
    
  }

const Navbar = () => {
    return (
        <div className='navbar'>
         <NavLink
           to='/'
           exact
          className='navLink'
           activeStyle={{
            background: ' orange',
            color: 'black'
           }}
         >Home</NavLink>
          <NavLink
           to='/NewMexicoHunts'
           exact
          className='navLink'
           activeStyle={{
            background: ' orange',
            color: 'black'
           }}
         >New Mexico Hunts</NavLink>
          <NavLink
           to='/TexasHunts'
           exact
           className='navLink'
           activeStyle={{
            background: ' orange',
            color: 'black'
           }}
         >Texas Hunts</NavLink>
          <NavLink
           to='/Rates'
           exact
           className='navLink'
           activeStyle={{
            background: ' orange',
            color: 'black'
           }}
         >Rates</NavLink>
        </div>
    )
}

export default Navbar