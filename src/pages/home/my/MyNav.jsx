import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  MyNavContainer
} from './MyStyled'

const mapState = state => ({
  list: state.list.list
})

class MyNav extends Component {

  render() {
    let navData = this.props.list.nav || []

    return (
      <MyNavContainer>
        <ul>
          {
            navData.map(value => (
              <li key={value.title}>
                <img src={value.icon} alt={value.title}/>
                <p>{value.title}</p>
              </li>
            ))   
          }              
        </ul>  
      </MyNavContainer>
    )
  }
}

export default connect(mapState)(MyNav)
