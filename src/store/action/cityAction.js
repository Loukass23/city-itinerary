
export const createCity = (city) => {

    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const firestore = getFirestore();
        firestore.collection('cities').add({
            //...itinerary,
            cityName: city.cityName,
            countryName: city.countryName,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            photoURL: city.photoURL,
            summary: city.summary,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_CITY',
                city
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_CITY_ERROR',
                err
            })
        })

    }
}