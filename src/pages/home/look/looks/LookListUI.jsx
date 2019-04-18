import React from 'react'

import {
  EllipsisH4
} from './LookListStyled'

export default props => (

  <>
    {
      props.pics.map((value , index )=> (
        <div key={value.created+index} onClick={() => 
          {
            props.route.push({pathname:"/detailed",state:{ data : value }})
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
  </>
)