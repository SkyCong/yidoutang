import React, { Component } from 'react'
import { connect } from 'react-redux'

import http from 'utils/fetch'

import {
  ScorllDataContainer,
  EllipsisH4
} from './ScorllDataStyled'


const mapState = state => ({
  list: state.list.list
})



class ScorllData extends Component {

  constructor(props) {
    super(props)
    this.state = {
      followData: [],
      findData: [],
      page: 1
    }
    this.fetchData()
  }
  
  render() {
    let ScorllData = this.props.type !== 'find' ?  this.state.findData || [] : this.state.followData || []
    console.log(this.state.followData)
    return (
      <ScorllDataContainer>
        {
          ScorllData.map(value => (
            <div key={value.title}>
              <img src={value.cover} alt={value.title}/>
            </div>  
          ))  
        }
      </ScorllDataContainer>
    )
  }

  async fetchData(){
    let result = await http.get(`/www/apiv4/activity/tagzhuantilist?page=${this.state.page}`)
    let result1 = await http.get(`/www/apiv4/activity/tagzhuantilist?page=${this.state.page}&tagname=%E7%A9%BA%E9%97%B4%E7%81%B5%E6%84%9F`)
    if(result){
      this.setState({
        followData: result.data.list,
        findData: result1.data.list
      })
    }
  }

}

export default connect(mapState)(ScorllData)
