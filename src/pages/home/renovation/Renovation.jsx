import React, { Component } from 'react'

import http from 'utils/fetch'

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

import {
  RenoContainer,
  Header,
  Nav,
  Process
} from './RenoStyled'

import Search from 'components/search/Search'



class Renovation extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
    this.state = {
      reno: []
    }
  }

  render() {
    console.log(this.state.reno.process)
    let navData = this.state.reno.nav || []
    let processData = this.state.reno.process || []

    return (
      <RenoContainer>
        <Header>          
          <Search
            hasborder={false}
            bgcolor="#f4f4f4"
            radius={30}
          ></Search>
        </Header>
        <Nav>
          {
            navData.map(value => (
              <div key={value.title}>
                <img src={value.icon} alt={value.title}/>
                <p>{value.title}</p>
              </div>
            ))  
          }
        </Nav> 
        <Process>
          {
            processData.map(value => (
              <div key={value.title}>
                <h3>{value.title}</h3>
                {/* <div>
                  {
                    value.sontags.map(value => (     
                      <ul key={value.title}>
                        <li>
                          <img>{value.icon}</img>
                          <p>{value.title}</p>
                        </li>
                      </ul>
                    ))                   
                  }
                </div> */}

              </div>  
            ))  
          }
        </Process>       
      </RenoContainer>
    )
  }

  async fetchData(){
    let result = await http.get('/api/reno')
    if(result){
      this.setState({
        reno: result.data
      })
    }
  }


}

export default withRouter(Renovation)