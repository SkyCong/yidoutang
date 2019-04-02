import React, { Component } from 'react'

import Swiper from './swiper/views/Swiper'
import Search from 'components/search/Search'
import IndexHeader from '../index/IndexHeader'

import {
  CookBookContainer,
  Header
} from './IndexStyled'

export default class CookBooks extends Component {
  render() {
    return (
      <CookBookContainer>
        <Header>          
          <Search
            hasborder={true}
            bgcolor="#fff"
          ></Search>
        </Header>
        <IndexHeader></IndexHeader>
        <main>
          <Swiper></Swiper>

        </main>
      </CookBookContainer>
    )
  }
}
