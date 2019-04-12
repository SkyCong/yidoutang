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
    let cdx = this.props.cdx || ''
    return (
      <SearchContainer>
        <TempComp { ...this.props } onClick={() =>{this.props.history.push('/search')}}>
          <img src={SearchIcon} alt="searchicon"/>
          <input type="text" 
            placeholder={cdx === '' ? '居致休闲椅 众测领回家' : this.props.cdx} 
            value={this.state.InputValue}
            // defaultValue={this.state.InputValue} 
            onChange={(event) => {this.handleValue(event)}}
            onClick={() => {console.log(0)}}
          />
          <svg 
            className={this.state.InputValue === '' ? 'hide' : 'show'}
            onClick={() => {    
                this.setState({
                InputValue : ''
              })
              this.props.passDis()
            }
          }
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2454"><path d="M499.2 64c-249.6 0-448 198.4-448 448s198.4 448 448 448 448-198.4 448-448-198.4-448-448-448z m179.2 582.4c12.8 12.8 12.8 32 0 44.8-12.8 12.8-32 12.8-44.8 0L499.2 556.8l-134.4 134.4c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8L454.4 512 320 377.6c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l134.4 134.4 134.4-134.4c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L544 512l134.4 134.4z" fill="#bfbfbf" p-id="2455"></path></svg>
        </TempComp>
        <img src={MessageIcon} alt="messageIcon"/>
      </SearchContainer>
    )
  }

  handleValue(event){
    console.log(this.props.cdx)
    this.setState({
      InputValue : event.target.value
    })
    this.props.pass(event.target.value)//获取实时的传值 通过事件传递上层父组件去（DATA）
  }
  

}
// cdx === undefined ? this.state.InputValue : this.props.cdx
export default withRouter(Search)
