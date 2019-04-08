import Styled from 'styled-components'

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
      width:48%;
      background: #fff;
      img{
        width: 98%;
        border-radius: 6px;
      }

      h4{
        font-size: .12rem;
      }

      p{
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

export {
  LookListContainer
}


