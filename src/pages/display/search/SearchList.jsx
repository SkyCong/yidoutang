import React, { Component } from 'react';
import { connect } from 'react-redux'

import http from 'utils/fetch'

import {
  SearchListContainer,
  ListNav,
  ListCommand
} from './SearchDataStyled'

const mapState = state => ({
  list: state.list.list
})

class SearchList extends Component {
  constructor(props) {
    super(props)
    // this.fetchData()
    // this.state = {
    //   hot: [],
    //   bool: false,
    //   val: '',
    //   searchList: []
    // }
    // this.handleVal = this.handleVal.bind(this)

  }
  
  render() {
    let navData = this.props.list.nav || []
    console.log(this.props.dis)
    // let searchListData = this.state.searchList || []
    return (
      <SearchListContainer className={this.props.dis === false ? 'show' : 'hide'}>
        121213
        <ListNav>

        </ListNav>

        <ListCommand>
          <h3>热门搜索</h3>
          <ul>
            {
              // hotData.map(value => (
              //   <li key={value.id}>
              //     {value.word}
              //   </li>
              // ))
            }
          </ul>
        </ListCommand>
        {/* <MainList bool={this.setState.bool = this.state.val === '' ? false : true}>
          <ul>
            {
              searchListData.map(value => (
                <li key={value.id}>
                  {value.word}
                </li>
              ))
            }
          </ul>
        </MainList> */}
      </SearchListContainer>
    )
  }

  // handleVal(data){

  //   this.setState({
  //     val: data //把父组件中的parentText替换为子组件传递的值
  //   },() =>{
  //     console.log(this.state.val)//setState是异步操作，但是我们可以在它的回调函数里面进行操作
  //     this.fetchDataVal()
  //  })
   
  // }


  // async fetchDataPic(){
  //   let searchVal = await http.get('/www/apiv3/apiv4/search/pic?&q=' + this.state.val)
    
  //   if(searchVal){
  //     this.setState({
  //       searchList: searchVal.data
  //     })
  //   }
  // }
  
}
// ('/www/apiv3/apiv4/search/pic?&page=1&q=qqq)

export default connect(mapState)(SearchList)