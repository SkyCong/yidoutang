import React, { Component } from 'react';
import http from 'utils/fetch'

import BScroll from 'better-scroll'

import {
  withRouter
} from 'react-router-dom'

import {
  RenListContainer,
  ListCommand,
  EllipsisH5,
  EllipsisP
} from './RenListStyled'

class RenList extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      renListData: [],
      page: 1
    } 
    this.fetchData()
  }

  render() {
    let renListData = this.state.renListData || []
    console.log(renListData)
    return (
      <RenListContainer>
        <h1>
          <i onClick={() => {
            this.props.history.push("/home")
          }}>                
            <svg t="1555208405146" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2067"><path d="M768 160.853333L691.2 85.333333l-358.826667 353.706667L256 514.133333l76.8 75.946667L686.933333 938.666667l75.946667-75.093334-353.706667-348.586666z" p-id="2068" fill="#ccc"></path></svg>
          </i>
          {this.props.history.location.state.title}
        </h1>
        <ListCommand>

          <main id="renData_scroll"> 
            <ul>
              {
                renListData.map((value,index) => (                  
                  <li key={index}>
                    <h4>
                      <img src={value.user_pic} alt={value.user_id} />
                      <span>{value.author || value.user_name}</span> 
                      <span>{value.views || value.click_num}</span>  
                      <i>
                        <svg t="1554969879184" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972"><path d="M512 209.403241c-201.731514 0-374.009206 125.476783-443.808922 302.596759 69.798692 177.119977 242.077408 302.596759 443.808922 302.596759 201.933105 0 374.010229-125.476783 443.808922-302.596759C886.009206 334.880023 713.933105 209.403241 512 209.403241zM512 713.731514c-111.355157 0-201.731514-90.375334-201.731514-201.731514s90.375334-201.731514 201.731514-201.731514 201.731514 90.375334 201.731514 201.731514S623.355157 713.731514 512 713.731514zM512 390.961296c-66.772776 0-121.038704 54.265928-121.038704 121.038704s54.265928 121.038704 121.038704 121.038704 121.038704-54.265928 121.038704-121.038704S578.772776 390.961296 512 390.961296z" p-id="4973" fill="#cacaca"></path></svg>
                      </i>         
                    </h4>
                    <div>
                      <EllipsisH5>{ value.subject || value.title}</EllipsisH5>
                      <EllipsisP>{ value.summary }</EllipsisP>
                    </div>
                    <img src={value.header_image} alt={value.tid} />
                  </li>
                ))
              }
            </ul>
          </main>
        </ListCommand>
      </RenListContainer>
    )
  }

  componentDidMount() {
    new BScroll('#renData_scroll', {
      click:true
    })
  }


  async fetchData(){
    if(this.props.history.location.state.type === ('401' || '2201')){
      console.log(this.props.history)
      let result = await http.get(`/www/apiv4/guide/list?list_type=0&page=${this.state.page}&tagid=${this.props.history.location.state.data.tagid}`)
      if(result){
        this.setState({
          renListData: result.data.guides
        })
      }
    }
    else if(this.props.history.location.state.type === '700'){
      console.log(this.props.history.location.state.data)
      window.location.href=this.props.history.location.state.data
    }
    else{
      console.log('000'+this.props.history)

      let result = await http.get(`/www/apiv3/case/list?&page=${this.state.page}`)
      if(result){
        this.setState({
          renListData: result.data.cases
        })
      }
    }
  }

}

export default withRouter(RenList)