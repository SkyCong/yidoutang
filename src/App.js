import React, { Component } from 'react'

import store from './store/'

import { Provider } from 'react-redux'

import Home from 'pages/home/Home'
import SearchData from 'pages/display/search/SearchData'
import Detailed from 'pages/display/detailed/Detailed'
import RenList from 'pages/display/ren_list/RenList'
import IndexDet from 'pages/display/index_det/IndexDet'
import Cs from 'pages/display/cs/Cs'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <Router>
          <Switch>
            <Redirect exact from="/" to="/home/indexfind" />
            <Route path='/home' component={Home}/>
            <Route path='/search' component={SearchData}/>
            <Route path='/detailed' component={Detailed}/>
            <Route path='/renlist' component={RenList}/>
            <Route path='/indexdet' component={IndexDet}/>
            <Route path='/cs' component={Cs}/>
          </Switch>
        </Router>

      </Provider>
    )
  }
}
