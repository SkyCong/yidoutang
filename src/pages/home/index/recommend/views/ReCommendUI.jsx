import React from 'react'

import {
  ReCommendUIContainer
} from './ReCommendStyled'


export default props => (
  <ReCommendUIContainer>
    {/* {props.follow.from_title} */
      props.follow.masters.map(value => (
        <img key={value.user_id} src={value.user_pic} alt={value.user_name}/>
      ))
    }
  </ReCommendUIContainer>
)