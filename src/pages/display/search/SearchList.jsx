import React, { Component } from 'react';
import { connect } from 'react-redux'

import http from 'utils/fetch'

import {
  SearchListContainer,
  ListNav,
  ListCommand,
  EllipsisH5,
  EllipsisP
} from './SearchDataStyled'

const mapState = state => ({
  list: state.list.list
})

class SearchList extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
    this.state = {
      searchList: []
    }
    // this.handleVal = this.handleVal.bind(this)

  }
  
  render() {
    let searchNavData = this.props.list.serachNav || []
    let searchListData = this.state.searchList || []
    console.log(searchListData)

    return (
      <SearchListContainer className={this.props.dis === false ? 'show' : 'hide'}>
        <ListNav>
          <ul>
            {
              searchNavData.map(value => (
                <li key={value.type}>
                  {value.title}
                  <b></b>
                </li>
              ))
            }
          </ul>
          <h3>
            <span>推荐</span>
            <span>最新</span>
          </h3>
        </ListNav>

        <ListCommand>
          <main> 
            <ul>
              {
                searchListData.map(value => (                  
                  <li key={value.group_id}>
                    <h4>
                      <img src={value.user_pic} alt={value.user_id} />
                      <span>{value.user_name}</span> 
                      <span>{value.click_num}</span>  
                      <i>
                        <svg t="1554969879184" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972"><path d="M512 209.403241c-201.731514 0-374.009206 125.476783-443.808922 302.596759 69.798692 177.119977 242.077408 302.596759 443.808922 302.596759 201.933105 0 374.010229-125.476783 443.808922-302.596759C886.009206 334.880023 713.933105 209.403241 512 209.403241zM512 713.731514c-111.355157 0-201.731514-90.375334-201.731514-201.731514s90.375334-201.731514 201.731514-201.731514 201.731514 90.375334 201.731514 201.731514S623.355157 713.731514 512 713.731514zM512 390.961296c-66.772776 0-121.038704 54.265928-121.038704 121.038704s54.265928 121.038704 121.038704 121.038704 121.038704-54.265928 121.038704-121.038704S578.772776 390.961296 512 390.961296z" p-id="4973" fill="#cacaca"></path></svg>
                      </i>         
                    </h4>
                    <div>
                      <EllipsisH5 dangerouslySetInnerHTML={{ __html: value.highlight.title }}/>
                      <EllipsisP dangerouslySetInnerHTML={{ __html: value.highlight.content }}/>
                    </div>
                    <img src={value.image} alt={value.user_id} />
                  </li>
                ))
              }

            </ul>
          </main>
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


  async fetchData(){
    let result = await http.get('/www/apiv4/search/case?highlight=1&order=0&page=1&q=%E5%9C%B0%E6%9D%BF')
    if(result){
      this.setState({
        searchList: result.data.cases
      })
    }
  }
  
}
// ('/www/apiv3/apiv4/search/pic?&page=1&q=qqq)

export default connect(mapState)(SearchList)

// {
//   // searchListData.map(value => (
//   //   <li key={value.id}>
//   //     {value.word}
//   //   </li>
//   // ))
  
// }