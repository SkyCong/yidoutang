import React, { Component } from 'react'

import {
  MyContainer
} from './MyStyled'

import MyTop from './MyTop'
import MyNav from './MyNav'
import MyList from './MyList'

export default class My extends Component {
  render() {
    return (
      <MyContainer>
        <MyTop></MyTop>
        <MyNav></MyNav>
        <MyList></MyList>      
      </MyContainer>
    )
  }
}


