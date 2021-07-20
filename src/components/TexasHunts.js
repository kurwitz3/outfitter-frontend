import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/Hunts.css'


const TexasHunts = (props) => {
    return (
        <div className='card'>
          <div>
            <h2 className='animal'>{props.hunt.animal}</h2>
            <p className="desc">{props.hunt.description}</p>
            <Link to='/Rates' className="btn">Rates and Info</Link>
          </div>
            <img src={props.hunt.image} className="pic" alt='' ></img>
        </div>
    )
}

export default TexasHunts