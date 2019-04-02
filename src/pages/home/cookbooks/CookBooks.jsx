import React, { Component } from 'react'

import Swiper from './swiper/views/Swiper'
import Search from 'components/search/Search'
import CategoriesHeader from '../categories/CategoriesHeader'

import {
  CookBookContainer,
  Header
} from './CookBookStyled'

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
        <CategoriesHeader></CategoriesHeader>
        <main>
          <Swiper></Swiper>

        </main>
      </CookBookContainer>
    )
  }
}
