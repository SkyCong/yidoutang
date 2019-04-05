import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  NavListContainer,
  Wrapper,
  Item
} from './NavListStyled'

const mapState = state => ({
  list: state.list.list
})

class NavList extends Component {

  render() {
    return (
      <NavListContainer>
        <Wrapper>
          
            {/* // this.props.list.map(value => (
            //   <Item>
            //     <img key={value.type} src={value.icon} alt={value.title}/>
            //     {value.title}
            //   </Item>
            // ))   */}
            <Item>q</Item>   
            <Item>q</Item>    
            <Item>q</Item>    
            <Item>3</Item>    
            <Item>4</Item>    
            <Item>5</Item>    
            <Item>6</Item>    
 
          
        </Wrapper>
      </NavListContainer>
    )
  }
}

export default connect(mapState)(NavList)
