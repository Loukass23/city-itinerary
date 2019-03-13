import authReducer from './authReducer'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import igReducer from './igReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    city: cityReducer,
    itinerary: itineraryReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    igUser: igReducer
});


export default rootReducer
