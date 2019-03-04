const initState = {
    itineraries: [{
        id: 1,
        title: 'Morning Walk',
        cityName: 'Berlin',

    },
    {
        id: 2,
        title: 'Pub Crawl',
        cityName: 'Paris',

    },
    {
        id: 3,
        title: 'Boat Tour',
        cityName: 'Paris',

    }
    ]
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