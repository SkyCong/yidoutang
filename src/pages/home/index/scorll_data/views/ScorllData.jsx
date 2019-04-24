import React, { Component } from 'react'
import { connect } from 'react-redux'


import {
  withRouter
} from 'react-router-dom'

import {
  ScorllDataContainer
} from './ScorllDataStyled'


const mapState = state => ({
  list: state.list.list
})



class ScorllData extends Component {

  constructor(props) {
    super(props)

    this.state = {
      followData: [],
      findData: []
    }
  }
  
  render() {
    let ScorllData = this.props.type !== 'find' ?  this.props.findData || [] : this.props.followData || []
    
    return (
      <ScorllDataContainer>
        {
          ScorllData.map(value => (
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
      </ScorllDataContainer>
    )
  }

}

export default withRouter(connect(mapState)(ScorllData))
