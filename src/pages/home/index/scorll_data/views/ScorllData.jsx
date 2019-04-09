import React, { Component } from 'react'
import { connect } from 'react-redux'

import BScroll from 'better-scroll'

import {
  ScorllDataContainer,
  EllipsisH4
} from './ScorllDataStyled'

const mapState = state => ({
  list: state.list.list
})

class ScorllData extends Component {

  render() {
    let ScorllData = this.props.list.recommend || []

    return (
      <ScorllDataContainer>
        {
          ScorllData.map(value => (
            <div key={value.data}>
              <p>
                <img src={value.user_pic} alt={value.authorid}/>
                <span>{value.author}</span>
              </p>
              <h4>{value.title}</h4>
              <img src={value.cover} alt={value.title}/>
            </div>  
          ))  
        }
      </ScorllDataContainer>
    )
  }

  
}

export default connect(mapState)(ScorllData)
