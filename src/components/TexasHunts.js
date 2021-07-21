import React from 'react'
import '../CSS/Hunts.css'

const TexasHunts = (props) => {
    return (
        <div className='hunts-card'>
          <div>
            <h2 className='hunts-card__H2'>{props.hunt.animal}</h2>
            <p className="hunts-card__paragraph">{props.hunt.description}</p>
          </div>
            <img src={props.hunt.image} className="hunts-card__pic" alt='' ></img>
        </div>
    )
}

export default TexasHunts