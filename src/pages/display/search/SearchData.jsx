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
      searchList: [],
      searchDis: [],
      bool: false,
      dis: true,
      val: '',
      cdx: ''
    }
    this.handleVal = this.handleVal.bind(this)
    this.handleDis = this.handleDis.bind(this)
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
            cdx={this.state.cdx}
            passDis={this.handleDis}
          ></Search>
          <i onClick={() =>{this.props.history.push('/home')}}>取消</i>
        </Header>
        <SearchOn className={this.state.dis === true ? 'show' : 'hide'} >
          <Main>
            <h3>热门搜索</h3>
            <ul>
              {
                hotData.map(value => (
                  <li key={value.id} onClick={() => 
                    {
                      this.setState(
                        {
                          dis: !this.state.dis,
                          cdx: value.word
                        }
                      )
                      this.fetchDataList(value.word)
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
                  <li key={value.id} onClick={() => 
                    {
                      this.setState(
                        {
                          dis: !this.state.dis,
                          cdx: value.word
                        }
                      )
                      // console.log('click'+this.state.cdx)
                      this.fetchDataList(value.word)
                    }
                  }  
                    dangerouslySetInnerHTML={{ __html: value.highlight }}
                  />
                ))
              }
            </ul>
          </MainList>
        </SearchOn>

        <SearchList dis={this.state.dis} data={this.state.searchDis}>

        </SearchList>
      </>
    )
  }

  handleVal(data){
    this.setState({
      val: data //把父组件中的parentText替换为子组件传递的值
    },() =>{
      this.fetchDataVal()
   })
  }

  handleDis(){
    this.setState({
      val: '',
      dis: true
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

  async fetchDataList(word){
    
    let result = await http.get('/www/apiv4/search/case?highlight=1&order=0&page=1&q='+word)
    
    if(result){
      this.setState({
        searchDis: result.data.cases
      })
    }
  }
  
}
