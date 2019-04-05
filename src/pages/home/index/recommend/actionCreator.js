import http from 'utils/fetch'

import { GET_FOLLOW } from './actionTypes'

const getFollowSync = follow => ({
  type: GET_FOLLOW,
  follow
})

const getFollowAsync = () => {
  return async dispatch => {
    let result = await http.get('/api/follow')
    dispatch(getFollowSync(result.data))
  }
}

export {
  getFollowSync,
  getFollowAsync
}