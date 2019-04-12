import React, { Component } from 'react'

import http from 'utils/fetch'
import BScroll from 'better-scroll'
import Masonry from 'react-masonry-component'

import {
  LookListContainer,
} from './LookListStyled'


class LookList extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
    this.state = {
      pics: []
    }
  }


  render() {
    let picsData = this.state.pics || []

    return (
      <LookListContainer id="look_scroll">
        <Masonry 
          className={'my-gallery-class'} // default ''
          elementType={'main'} // default 'div'
          options={{transitionDuration: 5, transitionProperty: 'width'}} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          // imagesLoadedOptions={imagesLoadedOptions} // default {}
        >

        {
          picsData.map(value => (
            <div key={value.match_id}>
              <img src={value.normal_image} alt={value.match_id}/>
              <h4>{value.case_title}</h4>
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
    let result = await http.get('/api/lookData')
    if(result){
      this.setState({
        pics: result.data.pics
      })
    }
  }

  componentDidMount() {
    new BScroll('#look_scroll')
  }



}

export default LookList
