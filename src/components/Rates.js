import React from 'react'
import '../CSS/Rates.css'


const Rates = (props) => {
    return (
        <div className='rates-card'>
            <div> 
             <img className='rates-card__pic' src={props.hunt.image2} alt=''></img>
          </div>
           <ul>
             <h2 className="rates-card__H2">{props.hunt.animal}</h2>
               <li> ${props.hunt.price}</li><br></br>
               <li>{props.hunt.days}</li><br></br>
               <li>{props.hunt.when}</li><br></br>
               <li>{props.hunt.info}</li>
             </ul>
          
        </div>
    )
}

export default Rates