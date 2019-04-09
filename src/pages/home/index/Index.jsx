import React, { Component } from 'react'

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

import {
  IndexContainer,
  Header
} from './IndexStyled'

import Search from 'components/search/Search'
import IndexHeader from '../index/IndexHeader'

import IndexFind from './IndexFind'
import IndexFollow from './IndexFollow'


class Index extends Component {
  constructor(props) {
    super(props)
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  render() {
    return (
      <IndexContainer>
        <Header>          
          <Search
            hasborder={false}
            bgcolor="#fff"
            radius={30}
          ></Search>
        </Header>
        <IndexHeader onSwitch={this.handleSwitch}></IndexHeader>

        <Switch>
          <Route exact path='/home' children={() => <IndexFind />}/>
          <Route path='/home/indexfind' children={() => <IndexFind />}/>
          <Route path='/home/indexfollow' children={() => <IndexFollow />}/>
        </Switch>
      </IndexContainer>
    )
  }

  handleSwitch(dir) {
    let path = dir === 'right' ? '/home/indexfind' : '/home/indexfollow'
    this.props.history.push(path)
  }
}

export default withRouter(Index)