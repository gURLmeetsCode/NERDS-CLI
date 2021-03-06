import axios from 'axios'


const initialState = {
  user: {}
}

// ACTION TYPES
const GOT_USER = 'GOT_USER'

// ACTION CREATOR
const gotMeActionCreator = (user) => ({
  type: GOT_USER,
  user
})


// THUNK CREATORS

export const getMeThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/auth/me')
      dispatch(gotMeActionCreator(response.data))
    }
    catch (e) {
      console.error(e, "your get me thunky thunk is broken shawty!")
    }
  }
}

export const getLoggedInUserThunk = (obj) => {
  return async (dispatch) => {
    try {
      const response = await axios.put('/auth/login', obj)
      dispatch(gotMeActionCreator(response.data))
    }
    catch (e) {
      console.error(e, "your get logged in user thunky thunk is broken shawty!")
    }
  }
}

export const addANewUserThunk = (obj) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/auth/signup", obj)
      dispatch(gotMeActionCreator(response.data))
    }
    catch (e) {
      console.error(e, "your add a user thunky thunk is broken shawty!")
    }
  }
}

export const getALoggedOutUserThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.delete("/auth/logout")
      dispatch(gotMeActionCreator(initialState.user))
    }
    catch (e) {
      console.error(e, "your get me thunky thunk is broken shawty!")
    }
  }
}



export const reducer = (state = initialState, action) => {
  switch(action.type){
   case GOT_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
