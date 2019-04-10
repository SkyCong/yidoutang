import React, { Component } from 'react'

import SearchIcon from 'assets/images/icon/search.png'
import MessageIcon from 'assets/images/icon/message.png'

import {
  withRouter
} from 'react-router-dom'

import { 
  BorderedInputContainer,
  InputContainer,
  SearchContainer
} from './SearchStyled'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      InputValue: ''
    }
    this.handleValue = this.handleValue.bind(this)
  }

  render() {
    let TempComp = this.props.hasborder ? BorderedInputContainer : InputContainer
    return (
      <SearchContainer>
        <TempComp { ...this.props } onClick={() =>{this.props.history.push('/search')}}>
          <img src={SearchIcon} alt="searchicon"/>
          <input type="text" placeholder="卫生间" ref="dom" value={this.state.InputValue} onChange={(event) => {this.handleValue(event)}}/>
        </TempComp>
        <img src={MessageIcon} alt="messageIcon"/>
      </SearchContainer>
    )
  }
  handleValue(event){
    this.setState({
      InputValue : event.target.value
    })
    console.log(event.target.value)
  }
}

export default withRouter(Search)
