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
    this.fetchData()
    this.state = {
      followData: []
    }
  }
  
  render() {
    let ScorllData = this.props.type === 'find' ?  this.props.list.recommend || [] : this.state.followData || []

    return (
      <ScorllDataContainer>
        {
          ScorllData.map(value => (
            <div key={value.data}>
              <p>
                <img src={value.user_pic} alt={value.authorid}/>
                <span>{value.author}</span>
              </p>
              <EllipsisH4>{value.title}</EllipsisH4>
              <img src={value.cover} alt={value.title}/>
            </div>  
          ))  
        }
      </ScorllDataContainer>
    )
  }

  async fetchData(){
    let result = await http.get('/api/followData')
    if(result){
      this.setState({
        followData: result.data.follow_content
      })
    }
  }

}

export default connect(mapState)(ScorllData)
