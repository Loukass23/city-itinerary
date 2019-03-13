import axios from 'axios';
import { options } from '../../config/instaConfig'


export const getIgProfile = () => {
    return (dispatch) => {
        return axios.get(options.userURL + options.accessToken)
            .then((res) => {
                console.log(res)
                dispatch({
                    type: 'GET_IG',
                    user: res.data
                })
            }).catch((err) => {
                console.log(err)
                dispatch({
                    type: 'GET_IG_ERROR',
                    err
                })
            })
    }

}
// export function getIgProfile(options) {
//     return (dispatch) => {
//         return axios.get(options.userURL + options.accessToken).then((response) => {
//             console.log(response)
//             dispatch(setIgUser(response.data));
//         })
//     }
// }

// export function setIgUser(igUser) {
//     return {
//         type: "GET_IG",
//         igUser: igUser
//     }
// }

