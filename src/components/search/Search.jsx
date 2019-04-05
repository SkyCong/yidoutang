import React, { Component } from 'react'

import SearchIcon from 'assets/images/icon/search.png'
import MessageIcon from 'assets/images/icon/message.png'


import { 
  BorderedInputContainer,
  InputContainer,
  SearchContainer
} from './SearchStyled'

export default class Search extends Component {
  render() {
    let TempComp = this.props.hasborder ? BorderedInputContainer : InputContainer
    return (
      <SearchContainer>
        <TempComp { ...this.props }>
          <img src={SearchIcon} alt="searchicon"/>
          <input type="text" placeholder="卫生间"/>
        </TempComp>
        <img src={MessageIcon} alt="messageIcon"/>
      </SearchContainer>
    )
  }
}
