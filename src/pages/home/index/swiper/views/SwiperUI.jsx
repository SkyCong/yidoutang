import React from 'react'

import {
  SwiperContainer
} from './SwiperStyled'

import { Carousel, ActivityIndicator } from 'antd-mobile';

export default props => (
  <SwiperContainer>
    {
      props.isLoaded ? (
        <Carousel  
          className="space-carousel"
            cellSpacing={9}
            slideWidth={0.88}
            // autoplay
            infinite
        >
          {
            props.list.banner.map(value => (
              <img key={value.banner_id} src={value.image} alt={value.title}/>
            ))
          }
        </Carousel>
      ) : (
        <ActivityIndicator animating />
      )
    }
  </SwiperContainer>
)