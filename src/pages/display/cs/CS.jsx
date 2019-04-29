import React, { Component } from 'react';
import http from 'utils/fetch'

import BScroll from 'better-scroll'

import {
  withRouter
} from 'react-router-dom'

import {
  IndexListContainer,
  ListCommand
} from './CsStyled'

class Cs extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      CsData: [],
      page: 1
    } 
  }

  componentWillMount(){
    this.fetchData()
  }
  
  render() {
    let CsData = this.state.CsData || []
    // console.log(this.props)
    // console.log(CsData.description)
    return (
      <IndexListContainer>
        <h1>
          <i onClick={() => {
            this.props.history.push("/home/indexfind")
          }}>                
            <svg t="1555208405146" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2067"><path d="M768 160.853333L691.2 85.333333l-358.826667 353.706667L256 514.133333l76.8 75.946667L686.933333 938.666667l75.946667-75.093334-353.706667-348.586666z" p-id="2068" fill="#ccc"></path></svg>
          </i>
          {this.props.history.location.state.title}
        </h1>
        <ListCommand id='CsData'>
          <main >
            {
              CsData.map(value => (
                <div key={value.title} onClick={
                  () =>{
                    this.props.history.push({
                      pathname:"/indexdet",
                      state:{ 
                        id : value.jump.data,
                        title : value.title
                      }
                    })
                  }
                }>
                  <img src={value.cover} alt={value.title}/>
                </div>  
              ))  
            }
          </main>
        </ListCommand>
      </IndexListContainer>
    )
  }

  componentDidMount() {
    new BScroll('#CsData', {
      click:true
    })
  }


  async fetchData(){
    let result = await http.get(`www/apiv4/activity/tagzhuantilist?list_type=0&page=${this.state.page}tagname=${this.props.history.location.state.title}`)
    if(result){
      this.setState({
        CsData: result.data.list
      })
    }
    
  }

}

export default withRouter(Cs)

