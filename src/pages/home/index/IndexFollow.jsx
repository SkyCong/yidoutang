import React, { Component } from 'react'
import {ReCommend} from './recommend/'
import { ScorllData } from './scorll_data/'


export default class Index extends Component {
  render() {
    return (
      <>
        <ReCommend /> 
        <ScorllData type='follow'/>
      </>

    )
  }
}
