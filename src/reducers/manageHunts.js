const manageHunts = (state = { hunts: [],reviews: [], loading: false},action) => {
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

            case 'LOADING_REVIEWS':
                return {
                    ...state,
                    hunts: [...state.hunts],
                    loading: true
                }
            
            case 'GET_REVIEWS':
                return {
                    ...state,
                    reviews: action.payload,
                    loading: false
                }
            case 'ADD_REVIEW':
                return {
                    ...state, reviews: [...state.reviews,action.payload]
                }
        default:
            return state
    }
}

export default manageHunts