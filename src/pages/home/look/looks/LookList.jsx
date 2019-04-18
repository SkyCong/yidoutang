import React, { Component } from 'react'


import {
  withRouter
} from 'react-router-dom'

import {
  EllipsisH4
} from './LookListStyled'

// export default props => (

//   <>
//     {
//       props.pics.map((value , index )=> (
//         <div key={value.created+index} onClick={() => 
//           {
//             this.props.history.push({pathname:"/detailed",state:{ data : value }})
//           } 
//         }>
//           <img src={value.normal_image} alt={value.match_id}/>
//           <EllipsisH4>{value.case_title}</EllipsisH4>
//           <p>
//             <img src={value.user_pic} alt={value.user_name}/>
//             <span>{value.user_name}</span>
//             {/* <i>☆</i> */}
//           </p>
//         </div>  
//       ))  
//     }
//   </>
// )

class LookListUI extends Component{
  constructor(props) {
    super(props)

  }


  render() {
    
    let picsData = this.props.data
    // console.log(picsData)

    return (
        <>
          {
            picsData.map((value , index )=> (
              <div key={value.created+index} onClick={() => 
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
      </>
    )
  }
}

export default withRouter(LookListUI)