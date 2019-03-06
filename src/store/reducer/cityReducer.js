import BerlinPhoto from '../../assets/img/Berlin.jpg'

const initState = {
    cities: [{
        id: 1,
        name: 'Berlin',
        photo: BerlinPhoto,
        details: 'Welcome to Berlin'
    },
    {
        id: 2,
        name: 'Paris',
        details: 'content2'
    }
        //,
        //     {
        //         id: 3,
        //         title: 'title3',
        //         content: 'content3'
        //     },
    ]
}

const cityReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CITY':
            console.log('created city', action.project)
            return state;
        case 'CREATE_CITY_ERROR':
            console.log('create city error', action.err)
            return state;
        default:
            return state;
    }



}
export default cityReducer