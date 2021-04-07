
export const setHunts = (hunts) => ({type:'GET_HUNTS',payload: hunts})

export const setReviews = (reviews) => ({type:'GET_REVIEWS',payload: reviews})

export const addReview = (review) => ({type:'ADD_REVIEW', payload: review})

export const fetchHunts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_HUNTS'})
        
        fetch('http://localhost:3000/hunts')
        .then(resp =>  resp.json())
        .then(json => {
            
            dispatch(setHunts(json))
        })
    }
}

export const fetchReviews = () => {
    return dispatch => {
        dispatch({type: 'LOADING_REVIEWS'})
        fetch('http://localhost:3000/reviews')
        .then(resp => resp.json())
        .then(json =>{
            dispatch(setReviews(json))
        })
    }
}

export const createReview = (review) => {
    return (dispatch) => {
        const configObj ={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(review)
        }
        fetch('http://localhost:3000/reviews',configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(addReview(json))
        })
    }
}