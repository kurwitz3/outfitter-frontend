import React from 'react'


const Rates = (props) => {
    return (
        <div className='card2'>
           <ul>
             <h2>{props.hunt.animal}</h2>
               <li> ${props.hunt.price}</li><br></br>
               <li>{props.hunt.days}</li><br></br>
               <li>{props.hunt.when}</li><br></br>
               <li>{props.hunt.info}</li>
             </ul>
          <div> 
             <img className='pic2' src={props.hunt.image2} alt=''></img>
          </div>
        </div>
    )
}

export default Rates