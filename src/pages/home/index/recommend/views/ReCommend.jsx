import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  RecommendContainer
} from './ReCommendStyled'

import {
  getFollowAsync
} from '../actionCreator'

import RecommendUI from './ReCommendUI'


const mapState = state => ({
  list: state.follow.follow.masters
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
    let filteredReComm = this.props.categories 

    return (
      <ReCommendContainer>
        <h3>
          达人推荐
          <span>换一批<span>
        </h3>
        <ReCommendUI { ...this.props } />
      </ReCommendContainer>
    )
  }

  fetchData() {
    this.props.fetchData()
  }

}

export default connect(mapState, mapDispatch)(HotCategories)
