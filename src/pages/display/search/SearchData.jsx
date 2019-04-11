import React, { Component } from 'react';

import Search from 'components/search/Search'
import SearchList from './SearchList'

import http from 'utils/fetch'

import {
  Header,
  Main,
  MainList,
  SearchOn
} from './SearchDataStyled'

export default class SearchData extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
    this.state = {
      hot: [],
      bool: false,
      dis: true,
      val: '',
      searchList: []
    }
    this.handleVal = this.handleVal.bind(this)
    this.fetchDataVal()  
  }
  
  render() {
    let hotData = this.state.hot || []
    let searchListData = this.state.searchList || []
    return (
      <>
        <Header>
          <Search bool={this.state.bool}
            hasborder={false}
            bgcolor="#f4f4f4"
            radius={30}
            pass={this.handleVal}//将父组件的事件传递下去 获取子组件的值
          ></Search>
          <i onClick={() =>{this.props.history.push('/home')}}>取消</i>
        </Header>
        <SearchOn className={this.state.dis === true ? 'show' : 'hide'}>
          <Main>
            <h3>热门搜索</h3>
            <ul>
              {
                hotData.map(value => (
                  <li key={value.id} onClick={() => 
                    {
                      this.setState(
                        {dis: !this.state.dis}
                      )
                    }
                  }>
                    {value.word}
                  </li>
                ))
              }
            </ul>
          </Main>
          <MainList bool={this.setState.bool = this.state.val === '' ? false : true}>
            <ul>
              {
                searchListData.map(value => (
                  <li key={value.id}>
                    {value.word}
                  </li>
                ))
              }
            </ul>
          </MainList>
        </SearchOn>

        <SearchList dis={this.state.dis}>

        </SearchList>
      </>
    );
  }

  handleVal(data){

    this.setState({
      val: data //把父组件中的parentText替换为子组件传递的值
    },() =>{
      console.log(this.state.val)//setState是异步操作，但是我们可以在它的回调函数里面进行操作
      this.fetchDataVal()
   })
   
  }

  async fetchData(){
    let result = await http.get('/www/apiv3/search/hot')
    
    if(result){
      this.setState({
        hot: result.data
      })
    }
  }

  async fetchDataVal(){
    let searchVal = await http.get('/www/apiv3/search/suggest?input=' + this.state.val)
    
    if(searchVal){
      this.setState({
        searchList: searchVal.data
      })
    }
  }

  async fetchDataPic(){
    let searchVal = await http.get('/www/apiv3/apiv4/search/pic?&q=' + this.state.val)
    
    if(searchVal){
      this.setState({
        searchList: searchVal.data
      })
    }
  }
  
}
// ('/www/apiv3/apiv4/search/pic?&page=1&q=qqq)