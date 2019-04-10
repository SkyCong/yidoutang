import React, { Component } from 'react';

import Search from 'components/search/Search'

import http from 'utils/fetch'

import {
  Header,
  Main,
  MainList
} from './SearchDataStyled'

export default class SearchData extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
    this.state = {
      hot: [],
      bool: false
    }
    this.handleTran = this.handleTran.bind(this)
  }
  
  render() {
    let hotData = this.state.hot || []
    return (
      <>
        <Header  onClick={() => this.handleTran(this.state.bool)}>
          <Search bool={this.state.bool}
            hasborder={false}
            bgcolor="#f4f4f4"
            radius={30}
          ></Search>
          <i onClick={() =>{this.props.history.push('/home')}}>取消</i>
        </Header>
        <Main>
          <h3>热门搜索</h3>
          <ul>
            {
              hotData.map(value => (
                <li key={value.id}>
                  {value.word}
                </li>
              ))
            }
          </ul>
        </Main>
        <MainList bool={this.state.bool}>
          12123
        </MainList>
      </>
    );
  }

  handleTran(bool){
    bool = true
    this.setState({
      bool
    })  
  }

  async fetchData(){
    let result = await http.get('/www/apiv3/search/hot')
    console.log(result)
    if(result){
      this.setState({
        hot: result.data
      })
    }
  }

}
