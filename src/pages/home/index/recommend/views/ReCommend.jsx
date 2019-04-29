import React, { Component } from 'react'
import { connect } from 'react-redux'

import BScroll from 'better-scroll'

import {
  ReCommendContainer
} from './ReCommendStyled'

import {
  getFollowAsync
} from '../actionCreator'

// import ReCommendUI from './ReCommendUI'


const mapState = state => ({
  follow: state.follow.follow
})

const mapDispatch = dispatch => ({
  fetchData() {
    dispatch(getFollowAsync())
  }
})

class ReCommend extends Component {



  componentWillMount(){
    this.fetchData()
  }

  render() {
    let ajaxData = this.props.follow || []
    return (
      <ReCommendContainer>
        <h3>
          达人推荐
          <span onClick={ () => this.handleReplace() }>换一批</span>
        </h3>
        <div className="follow_scroll">
          <ul> 
            {
              ajaxData.map(value => (
                <li key={value.user_id}>
                  <img src={value.user_pic} alt={value.user_name}/>
                  <p>
                    {value.user_name}
                    <img src={value.badge_logo} alt="dj"/>
                  </p>
                  <span>获得{value.follower_num}次收藏</span>
                  <div><b>+</b>关注</div>
                </li>
              ))  
            }
          </ul>
        </div>
      </ReCommendContainer>
    )
  }

  fetchData() {
    this.props.fetchData()
  }

  handleReplace(){
    this.props.fetchData()
  }

  componentDidMount() {
    new BScroll('.follow_scroll', {
      startX:0,
      click:true,
      scrollX:true,
      scrollY:false,
      eventPassthrough:'vertical'
    })
  }

}

export default connect(mapState, mapDispatch)(ReCommend)