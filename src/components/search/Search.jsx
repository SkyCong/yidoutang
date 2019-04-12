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
    let cdx = this.props.cdx
    
    return (
      <SearchContainer>
        <TempComp { ...this.props } onClick={() =>{this.props.history.push('/search')}}>
          <img src={SearchIcon} alt="searchicon"/>
          <input type="text" placeholder="卫生间" value={cdx === '' ? this.state.InputValue : this.props.cdx} onChange={(event) => {this.handleValue(event)}}/>
        </TempComp>
        <img src={MessageIcon} alt="messageIcon"/>
      </SearchContainer>
    )
  }

  handleValue(event){
    this.setState({
      InputValue : event.target.value
    })
    this.props.pass(event.target.value)//获取实时的传值 通过事件传递上层父组件去（DATA）
  }

}

export default withRouter(Search)
