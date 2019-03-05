const initState = {

}

// const itineraryReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'GET_ITINERARY':
//             console.log('itineraries retrieved', action.itinerary)
//             return state;
//         default:
//             return state;
//     }
// }
const itineraryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ITINERARY':
            console.log('created itinerary', action.project)
            return state;
        case 'CREATE_ITINERARY_ERROR':
            console.log('create itinerary error', action.err)
            return state;
        default:
            return state;
    }


}

export default itineraryReducer