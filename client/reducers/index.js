import axios from 'axios'


// ACTION TYPES
const GET_USERS = 'GET_USERS'

// ACTION CREATORS
export const gotJSONDataActionCreator = (data) => ({
  type: GET_USERS,
  users: data
})

// THUNK CREATORS
export const getJSONDataThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch(gotJSONDataActionCreator(response.data))
    }
    catch(err) {
      console.error(err, "your thunky thunk is broken shawty!")
    }
  }
}



const initialState = {
  users: []
}


export const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}
