import React from 'react'
import {Link} from 'react-router-dom'

const NewMexicoHunts = (props) => {
   return (
        <div className='card'>
            <div>
            <h2 id='animal'>{props.hunt.animal}</h2>
            <p class="desc">{props.hunt.description}</p>
            <Link to='/Rates' className="btn">Rates and Info</Link>
            </div>
            <img src={props.hunt.image} className="pic" ></img>
        </div>
    )
}


export default NewMexicoHunts