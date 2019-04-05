import React from 'react'

import {
  ReCommendUIContainer
} from './ReCommendStyled'


export default props => (
  <ReCommendUIContainer>
    {
      props.list.map(value => (
        <img key={value.id} src={value.img} alt={value.name}/>
      ))
    }
  </ReCommendUIContainer>
)