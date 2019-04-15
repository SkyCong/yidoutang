import Styled from 'styled-components'
import ellipsis from 'components/styled/ellipsis'

const LookListContainer = Styled.div `
  background: #fff;
  height: 100%;
  width: 100%;
  main{
    background: #fff;
    padding: .14rem;
    padding-top: 1.28rem;
    display: flex;
    flex-wrap: wrap;  
    justify-content: space-between;
    div{
      width:46%;
      background: #fff;
      padding: 1%;
      img{
        width: 98%;
        border-radius: 6px;
      }

      h4{
        font-size: .1rem;
        font-weight: normal;
        color: #797979;
        padding-top: .05rem;
      }

      p{
        padding: .1rem 0;
        overflow: hidden;
        img{
          border-radius: 50%;
          width: .12rem;
          height: .12rem;
          float: left;
        }
        span{
          font-size: .1rem;
          color: #ccc;          
          float: left;
        }
        i{
          float: right;
        }
      }
    }
  }
`

const EllipsisH4 = ellipsis({
  component: Styled.h4 ``,
  lineClamp: 3
})

export {
  LookListContainer,
  EllipsisH4
}


