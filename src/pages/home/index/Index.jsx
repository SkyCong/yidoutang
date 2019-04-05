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

import Swiper from './swiper/views/Swiper'
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
        <main>
          <Swiper></Swiper>
        </main>
        <Switch>
          <Redirect exact from='/' to='/index/find' />
          <Route path='/index/find' component={IndexFind}/>
          <Route path='/index/follow' component={IndexFollow}/>
        </Switch>
      </IndexContainer>
    )
  }

  handleSwitch(dir) {
    let path = dir === 'right' ? '/index/find' : '/index/follow'
    this.props.history.push(path)
  }
}

export default withRouter(Index)