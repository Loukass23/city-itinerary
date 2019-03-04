
export const createItinerary = (itinerary) => {
    //WHITHOUT THUNK
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }

    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const firestore = getFirestore();
        firestore.collection('itineraries').add({
            ...itinerary,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_ITINERARY',
                itinerary
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_ITINERARY_ERROR',
                err
            })
        })

    }
}
