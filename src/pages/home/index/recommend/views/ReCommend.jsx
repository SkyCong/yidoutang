import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  ReCommendContainer
} from './ReCommendStyled'

import {
  getFollowAsync
} from '../actionCreator'

import ReCommendUI from './ReCommendUI'


const mapState = state => ({
  follow: state.follow.follow
})

const mapDispatch = dispatch => ({
  fetchData() {
    dispatch(getFollowAsync())
  }
})

class ReCommend extends Component {

  constructor(props) {
    super(props)
    this.fetchData()
  }

  render() {
    // let filteredReComm = this.props.categories 
    console.log(this.props.follow.masters)
    let aaa = this.props.follow.masters || []
    return (
      <ReCommendContainer>
        <h3>
          达人推荐
          <span>换一批</span>
        </h3>
        {
          aaa.map(value => (
            <img key={value.user_id} src={value.user_pic} alt={value.user_name}/>
          ))          
        }

      </ReCommendContainer>
    )
  }

  fetchData() {
    this.props.fetchData()
  }

}

export default connect(mapState, mapDispatch)(ReCommend)
