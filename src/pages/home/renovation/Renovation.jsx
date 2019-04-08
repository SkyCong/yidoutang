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
  RenoContainer,
  Header,
  Scorll,
  Nav,
  Process,
  Questions,
  Activitys
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
    let navData = this.state.reno.nav || []
    let processData = this.state.reno.process || []
    let questionsData = (this.state.reno.questions && this.state.reno.questions["list"]) || [] 
    let activitysData = this.state.reno.activitys || []
    return (
      <RenoContainer>

        <Header>          
          <Search
            hasborder={false}
            bgcolor="#f4f4f4"
            radius={30}
          ></Search>
        </Header>

        <main id="reno_scorll">
          <Scorll>
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
                <h3>
                  话题讨论
                  <span>查看全部﹥</span>
                </h3>
                <div className="questions_scroll">
                  <ul>
                    {
                      questionsData.map(value => (     
                        <li key={value.data}>
                          <h4>{value.title}</h4>
                          <p>
                            {
                              value.participants.map((values,index) => (  
                                <img src={values} alt={'icon'} key={index}/> 
                              ))  
                            }
                            <span>他们正在参加</span>
                          </p>
                        </li>
                      ))                     
                    }
                  </ul>
                </div> 
            </Questions> 

            <Activitys>
              <ul>
                {
                  activitysData.map(value => (
                    <li key={value.title}>
                      <img src={value.cover} alt={value.title}/> 
                      <b>{value.title}</b>
                    </li>
                  ))
                }
              </ul>
            </Activitys>

           </Scorll>  
        </main>     

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

  componentDidMount() {
    new BScroll('.questions_scroll', {
      startX:0,
      click:true,
      scrollX:true,
      scrollY:false,
      eventPassthrough:'vertical'
    })

    new BScroll('#reno_scorll')
  }


}

export default withRouter(Renovation)