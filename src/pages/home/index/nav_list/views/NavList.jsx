import React, { Component } from 'react'
import { connect } from 'react-redux'

import BScroll from 'better-scroll'

import {
  withRouter
} from 'react-router-dom'

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
      <NavListContainer className="nav_scroll" onClick={ () => {
        
      }}>
        <ul>
          {
            navData.map(value => (
              <li key={value.title} onClick={
                () => {
                    this.props.history.push({
                      pathname:"/renlist",
                      state:{ 
                        type : value.type,
                        title : value.title,
                        data : value.type === '700'
                        ? value.jump.data : value.type === ('401' || '2201') 
                        ? JSON.parse(value.jump.data) : '',
                      }
                    })
                  }
                }
              > 
                <img src={value.icon} alt={value.title}/>
                {value.title}
              </li>
            ))   
          }              
        </ul>  
        <div>                
          <img src='http://pic.rmb.bdstatic.com/859063c763d83e4844bdcb74e8e08fab9906.gif' alt='gif'/>
        </div>
      </NavListContainer>
    )
  }

  componentDidMount() {
    new BScroll('.nav_scroll', {
      startX:0,
      click:true,
      scrollX:true,
      scrollY:false,
      eventPassthrough:'vertical'
    })
  }

  
}

export default withRouter(connect(mapState)(NavList))
