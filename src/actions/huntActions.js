
export const setHunts = (hunts) => ({type:'GET_HUNTS',payload: hunts})

export const setReviews = (reviews) => ({type:'GET_REVIEWS',payload: reviews})

export const addReview = (review) => ({type:'ADD_REVIEW', payload: review})

export const fetchHunts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_HUNTS'})
        
        fetch('https://shielded-reaches-36570.herokuapp.com')
        .then(resp =>  resp.json())
        .then(json => {
            
            dispatch(setHunts(json))
        })
    }
}

export const fetchReviews = () => {
    return dispatch => {
        dispatch({type: 'LOADING_REVIEWS'})
        fetch('https://shielded-reaches-36570.herokuapp.com')
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
        fetch('https://shielded-reaches-36570.herokuapp.com',configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(addReview(json))
        })
    }
}