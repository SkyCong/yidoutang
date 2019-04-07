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
  Process,
  Questions
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
    let questionsData = this.state.reno.questions || []

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
            processData.map((value,index) => (
              <div key={index}>
                <h3>{value.title}</h3>
                <ul>
                  {
                    value.sontags.map(values => (     
                      <li key={values.title}>
                        <img src={values.icon} alt={values.title}/>
                        <p>{values.title}</p>
                      </li>
                    ))                     
                  }
                </ul>
              </div>  
            ))  
          }
        </Process>

        <Questions>
          {
            questionsData.map((value,index) => (
              <div key={index}>
                <h3>{value.title}</h3>
                <ul>
                  {
                    value.sontags.map(values => (     
                      <li key={values.title}>
                        <img src={values.icon} alt={values.title}/>
                        <p>{values.title}</p>
                      </li>
                    ))                     
                  }
                </ul>
              </div>  
            ))  
          }
        </Questions> 

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