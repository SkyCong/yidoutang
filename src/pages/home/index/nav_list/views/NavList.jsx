import React, { Component } from 'react'
import { connect } from 'react-redux'

import BScroll from 'better-scroll'

import {
  NavListContainer
} from './NavListStyled'

const mapState = state => ({
  list: state.list.list
})

class NavList extends Component {

  render() {
    let navData = this.props.list.nav || []

    return (
      <NavListContainer className="nav_scroll">
        <ul>
          {
            navData.map(value => (
              <li key={value.title}>
                <img src={value.icon} alt={value.title}/>
                {value.title}
              </li>
            ))   
          }              
        </ul>  
        <div></div>
      </NavListContainer>
    )
  }

  componentDidMount() {
    console.log(0)
    new BScroll('.nav_scroll', {
      startX:0,
      click:true,
      scrollX:true,
      scrollY:false,
      eventPassthrough:'vertical'
    })
  }

  
}

export default connect(mapState)(NavList)
