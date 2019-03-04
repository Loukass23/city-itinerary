import authReducer from './authReducer'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    city: cityReducer,
    itinerary: itineraryReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});


export default rootReducer
