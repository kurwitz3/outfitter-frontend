
export const setHunts = (hunts) => ({type:'GET_HUNTS',payload: hunts})


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