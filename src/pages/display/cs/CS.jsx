import React, { Component } from 'react'
import Masonry from 'react-masonry-component';
import http from 'utils/fetch'



const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default class Gallery extends Component {

  constructor(props) {
    super(props)
    this.fetchData()
    this.state = {
      pics: []
    }
  }

  render() {
      let picsData = this.state.pics || []

      console.log(picsData)
  
      return (
          <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'ul'} // default 'div'
              options={{transitionDuration: 5, transitionProperty: 'width'}} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              imagesLoadedOptions={imagesLoadedOptions} // default {}
          >
            {
              picsData.map(value => (
                <li className="image-element-class" key={value.match_id}>
                  <img src={value.normal_image} alt={value.match_id} style={{width:'30%'}}/>
                </li>
              ))  
            }
          </Masonry>
      );
  }

  async fetchData(){
    let result = await http.get('/api/lookData')
    if(result){
      this.setState({
        pics: result.data.pics
      })
    }
  }

}
