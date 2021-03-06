import React, { Component } from 'react'

import Swiper from './swiper/views/Swiper'
import { NavList } from './nav_list/'
import { ScorllData } from './scorll_data/'

export default class IndexFind extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <> 
        <Swiper />
        <NavList />
        <ScorllData type='find' {...this.props}/>
      </>
    )
  }
}
