import React, { Component } from 'react'

import http from 'utils/fetch'
import BScroll from 'better-scroll'
import Masonry from 'react-masonry-component'

import {
  withRouter
} from 'react-router-dom'

import {
  LookListContainer,
  EllipsisH4
} from './LookListStyled'


class LookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pics: [],
      space: "客厅",
      page: 1
    } 
    // lookListScroll
    this.fetchData()
  }


  render() {
    let picsData = this.state.pics || []
    console.log(this.state.page)
    return (
      <LookListContainer id="look_scroll">
        <Masonry 
          className={'my-gallery-class'} // default ''
          elementType={'main'} // default 'div'
          options={{transitionDuration: 2, transitionProperty: 'width'}} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          // imagesLoadedOptions={imagesLoadedOptions} // default {}
        >

        {
          picsData.map(value => (
            <div key={value.match_id} onClick={() => 
              {
                this.props.history.push({pathname:"/detailed",state:{ data : value }})
              } 
            }>
              <img src={value.normal_image} alt={value.match_id}/>
              <EllipsisH4>{value.case_title}</EllipsisH4>
              <p>
                <img src={value.user_pic} alt={value.user_name}/>
                <span>{value.user_name}</span>
                {/* <i>☆</i> */}
              </p>
            </div>  
          ))  
        }

        </Masonry>
      </LookListContainer>
    )
  }

  async fetchData(){

    let result = await http.get(`/www/apiv3/case/album?space=${this.state.space}&page=${this.state.page}`)
    if(result){
      this.setState({
        pics: [
          ...this.state.pics,
          ...result.data.pics
        ]
      })
    }
  }

  componentDidMount() {

    let _this = this
    let lookListScroll = new BScroll('#look_scroll',{
      click: true
    })

    lookListScroll.on('scrollEnd', function(){
    
      if (this.y <= this.maxScrollY) {
        _this.setState({
          page: _this.state.page +1
        })
        _this.fetchData()
      }

      this.refresh()
    })
  }

  // componentWillUpdate(){
  //   // console.log(this.props.pages)
  //   // this.fetchData()
  // }

}

export default withRouter(LookList)