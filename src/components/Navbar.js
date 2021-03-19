import React from 'react'
import {NavLink} from 'react-router-dom';



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
         <h3>American Outfitters</h3>
        </div>
    )
}

export default Navbar