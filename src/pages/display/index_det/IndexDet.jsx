import React, { Component } from 'react';
import http from 'utils/fetch'

import BScroll from 'better-scroll'

import {
  withRouter
} from 'react-router-dom'

import {
  IndexListContainer,
  ListCommand,
  EllipsisH5,
  EllipsisP
} from './IndexDetStyled'

class IndexDet extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      indexListData: [],
    } 
    this.fetchData()
  }

  render() {
    let indexListData = this.state.indexListData || []
    console.log(this.props)
    console.log(indexListData.description)
    return (
      <IndexListContainer>
        <h1>
          <i onClick={() => {
            this.props.history.push("/home")
          }}>                
            <svg t="1555208405146" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2067"><path d="M768 160.853333L691.2 85.333333l-358.826667 353.706667L256 514.133333l76.8 75.946667L686.933333 938.666667l75.946667-75.093334-353.706667-348.586666z" p-id="2068" fill="#ccc"></path></svg>
          </i>
          {this.props.history.location.state.title}
        </h1>
        <ListCommand>

          <main id="indexData_scroll">  
            <div>
                <img src={indexListData.banner} alt={indexListData.title} />
            </div>

            <div dangerouslySetInnerHTML={{ __html: indexListData.description }}/>

          </main>
        </ListCommand>
      </IndexListContainer>
    )
  }

  componentDidMount() {
    new BScroll('#indexData_scroll', {
      click:true
    })
  }


  async fetchData(){

    let result = await http.get(`/www/apiv3/recommend/zhuanti?id=${this.props.history.location.state.id}`)
    if(result){
      this.setState({
        indexListData: result.data
      })
    }
    
  }

}

export default withRouter(IndexDet)

