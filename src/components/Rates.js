import React from 'react'


const Rates = (props) => {
    return (
        <div className='card'>
            
            <ul>
            <h2>{props.hunt.animal}</h2>
                <li> ${props.hunt.price}</li><br></br>
                <li>{props.hunt.days}</li><br></br>
                <li>{props.hunt.when}</li><br></br>
                <p>{props.hunt.info}</p>
            </ul>

        </div>
    )
}

export default Rates