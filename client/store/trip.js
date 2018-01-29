import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_TRIP = 'GET_TRIP'
const CREATE_TRIP = 'CREATE_TRIP'

/**
 * ACTION CREATORS
 */

const addTrip = trip => ({type: CREATE_TRIP, trip})
// const getTrip = trip => ({type: GET_TRIP, trip})

/**
 * THUNK CREATORS
 */

// export const fetchTrip = (id) =>
//   dispatch =>
//     axios.get(`/api/trips/${id}`)
//       .then(res =>
//         dispatch(getTrip(res.data)))
//       .catch(err => console.log(err))


export function postTrip(newTrip) {
  return function thunk(dispatch) {
    return axios.post(`/api/trips`, newTrip)
      .then(res => res.data)
      .then(trip => {
        dispatch(addTrip(trip))
      //   axios.post('/api/email/confirmation', emailaddresses)
      })
      .catch(err => console.error(err))
  }
}

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_TRIP:
    return action.trip;
    default:
      return state
  }
}