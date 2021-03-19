const manageHunts = (state = { hunts: [],loading: false},action) => {
    switch(action.type){
        case 'LOADING_HUNTS':
            return {
                ...state,
                hunts: [...state.hunts],
                loading: true
            }
        case 'GET_HUNTS':
            return {
                ...state,
                hunts: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default manageHunts