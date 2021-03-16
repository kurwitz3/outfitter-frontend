import React from 'react'
import {NavLink} from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

const Navbar = () => {
    return (
        <div>
         <NavLink
           to='/'
           exact
           style={link}
           activeStyle={{
            background: 'black'
           }}
         >Home</NavLink>
          <NavLink
           to='/NewMexicoHunts'
           exact
           style={link}
           activeStyle={{
            background: 'black'
           }}
         >New Mexico Hunts</NavLink>
          <NavLink
           to='/TexasHunts'
           exact
           style={link}
           activeStyle={{
            background: 'Black'
           }}
         >Texas Hunts</NavLink>
          <NavLink
           to='/Rates'
           exact
           style={link}
           activeStyle={{
            background: 'black'
           }}
         >Rates</NavLink>
        </div>
    )
}

export default Navbar