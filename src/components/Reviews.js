import React from 'react'
import '../CSS/Reviews.css'


const Reviews = (props) => {
    return (
        <div>
          <div className="review-container">
            <img  className='review__deer-pic' alt=''src='data:image/png;base64,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'></img>
            <h2>{props.review.name}</h2>
            <p className='review__date'>{props.review.date}</p>
            <p className='review__paragraph'>{props.review.content}</p>
          
          </div>
        </div>
    )
}

export default Reviews