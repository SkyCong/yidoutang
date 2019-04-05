import { GET_FOLLOW } from './actionTypes'

const defaultState = {
  follow: {}
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case GET_FOLLOW:
      return {
        follow: action.follow
      }

    default: 
      return state
  }
}

export default reducer