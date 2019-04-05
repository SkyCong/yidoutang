import React, { Component } from 'react'

import Swiper from './swiper/views/Swiper'
import { NavList } from './nav_list/'


export default class IndexFind extends Component {
  render() {
    return (
      <>
        <Swiper></Swiper>
        <NavList></NavList>
      </>
    )
  }
}
