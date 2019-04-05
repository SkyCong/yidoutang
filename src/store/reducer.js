import { combineReducers } from 'redux'

import { reducer as list } from 'pages/home/index/swiper/'

import { reducer as follow } from 'pages/home/index/recommend/'

export default combineReducers({
  list,
  follow
})