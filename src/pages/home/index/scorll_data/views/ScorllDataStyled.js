import Styled from 'styled-components'
import ellipsis from 'components/styled/ellipsis'

const ScorllDataContainer = Styled.div `  
  background: #f8f8f8;
  display: flex;
  flex-wrap: wrap;  
  flex-direction: column;
  div{
    padding: .2rem;
    background: #fff;
    margin-bottom: .06rem;
    img{
      width: 98%;
      border-radius: 6px;
    }

    h4{
      font-size: .12rem;
      margin: .12rem 0;
    }

    p{
      line-height: 1em;
      img{
        border-radius: 50%;
        width: .12rem;
        height: .12rem;
        float: left;
      }
      span{
        font-size: .1rem;
        color: #ccc;          
      }
    }
  }

`

const EllipsisH4 = ellipsis({
  component: Styled.h4 ``,
  lineClamp: 3
})


export {
  ScorllDataContainer,
  EllipsisH4
}


