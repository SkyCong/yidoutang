import http from 'utils/fetch'

import { GET_FOLLOW } from './actionTypes'

const getFollowSync = follow => ({
  type: GET_FOLLOW,
  follow
})

const getFollowAsync = () => {
  return async dispatch => {
    let follow = []
    for(let i=0;i<3;i++){
      let result = await http.get('/www/apiv4/user/modelmasters')
      follow = follow.concat(result.data.masters)
    }
    dispatch(getFollowSync(follow))
  }
}

export {
  getFollowSync,
  getFollowAsync
}