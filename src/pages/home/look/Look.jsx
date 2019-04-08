import React, { Component } from 'react'

import http from 'utils/fetch'
import BScroll from 'better-scroll'

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

import {
  LookContainer,
  Header,
  Scorll,
  Nav,
  NavList
} from './LookStyled'

import Search from 'components/search/Search'
import LookList from './look_list/LookList'

class Look extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
    this.state = {
      tags: [],
      groups: [],
      display: [],
      dis: false
    }
    this.handleSwich = this.handleSwich.bind(this)
  }


  render() {
    let tagData = this.state.tags || []
    console.log(tagData)
    return (
      <LookContainer>

        <Header>          
          <Search
            hasborder={false}
            bgcolor="#f4f4f4"
            radius={30}
          ></Search>
          <Nav>
            {
              tagData.slice(0,4).map(value => (
                <span key={value.key}  onClick={() => this.handleSwich(value.key,value.groups,this.state.dis)}>
                  {value.name}ⅴ
                </span>  
              ))  
              
            }
            {
              tagData.slice(4,5).map(value => (
                <span key={value.key} onClick={() => this.handleSwich(value.key,value.groups,this.state.dis)}>•••</span>  
              ))   
            }
          </Nav> 

          <NavList dis={this.state.dis} >
            <ul>
              <li></li>
            </ul>
            <div onClick={() => this.handleBay(this.state.dis)}></div>
          </NavList> 
        </Header>


        <LookList></LookList> 

      </LookContainer>
    )
  }

  async fetchData(){
    let result = await http.get('/api/navList')
    if(result){
      this.setState({
        tags: result.data.tags
      })
    }
  }

  handleSwich(display,groups,dis) {
    if(display!=this.state.display){
      dis = true
    }
    else{
      dis = !dis
    }
    this.setState({
      display,
      groups,
      dis
    })
  }
  handleBay(dis){
    dis = false  
    this.setState({
      dis
    })  
  }
  // handleB(bay){
  //   console.log('B')
  //   bay = true

  //   this.setState({
  //     bay
  //   })
  //   console.log(bay)

  // }
}

export default withRouter(Look)