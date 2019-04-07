import Styled from 'styled-components'

const ReCommendContainer = Styled.div `
  background: #fff;
  margin-bottom: .08rem;
  h3{
    color: #333;
    font-size: .16rem;
    margin: .15rem 0;
    padding: 0 .2rem;
    overflow: hidden;
    font-family: inherit;
    font-weight: 600;
    line-height: 1.1;
    color: inherit;

    span{
      float: right;
      color: #999;
      font-size: .12rem;
      font-weight: normal;
      margin-top: .04rem;
    }
  }

  div{
    touch-action: none;
    overflow-x: auto;
    padding: .1rem;
    ul{
      padding: 0 .2rem;
      width: 12.6rem;
      display: flex;
      justify-content: space-between;
      li{
        width: 1.26rem;
        height: 1.92rem;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;     
        justify-content: center;

        img{
          width: .62rem;
          height: .62rem;
          border-radius: 50%;
          margin-bottom: .15rem;
        }
        p{
          position: relative;
          color: #333;
          font-size: .14rem;
          img{
            position: absolute;
            width: .14rem;
            height: .14rem;
          }
        }
        span{
          color: #a5a5a5;
          font-size: .12rem;
        }
        div{
          margin-top: .15rem;
          line-height: .1rem;
          width: .6rem;
          height: .28rem;
          border-radius: 2.5px;
          background:#ffda46;
        }
      }
    }
  }

`

const ReCommendUIContainer = Styled.div `


`
export {
  ReCommendContainer,
  ReCommendUIContainer
}