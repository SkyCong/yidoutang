import React, { Component } from 'react'
import http from 'utils/fetch'

import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import {
  IndexContainer,
  Header,
  Scroll
} from './IndexStyled'

import Search from 'components/search/Search'
import IndexHeader from '../index/IndexHeader'

import BScroll from 'better-scroll'

import IndexFind from './IndexFind'
import IndexFollow from './IndexFollow'


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      followData: [],
      findData: []
    }
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  componentWillMount(){
    this.fetchData()
  }

  render() {
    // console.log(this.state.page)
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
        <Scroll id="index_scroll">
          <main>
            <Switch>
              <Route exact path='/home' children={() => <IndexFind />}/>
              <Route path='/home/indexfind'  children={() => <IndexFind {...this.state}/> }/>
              <Route path='/home/indexfollow' children={() => <IndexFollow {...this.state}/>}/>
            </Switch>
          </main>
        </Scroll>
      </IndexContainer>
    )
  }

  handleSwitch(dir) {
    let path = dir === 'right' ? '/home/indexfind' : '/home/indexfollow'
    this.setState({
      page:  1
    })
    this.props.history.push(path)
  }

  componentDidMount() {    
    let _this = this
    let indexScroll = new BScroll('#index_scroll',{
      click: true
    })

    indexScroll.on('scrollEnd', function(){
      if (this.y <= this.maxScrollY) {
        _this.setState({
          page: _this.state.page + 1
        })
        _this.fetchData()
      }
      this.refresh()
    })
  }

  async fetchData(){
    let result = await http.get(`/www/apiv4/activity/tagzhuantilist?page=${this.state.page}`)
    let result1 = await http.get(`/www/apiv4/activity/tagzhuantilist?page=${this.state.page}&tagname=%E7%A9%BA%E9%97%B4%E7%81%B5%E6%84%9F`)
    
    this.setState({
      
      followData: [
        ...this.state.followData,
        ...result.data.list         
      ],

      findData: [
        ...this.state.findData,
        ...result1.data.list
      ]
    })
    
  }
  
}

export default withRouter(Index)