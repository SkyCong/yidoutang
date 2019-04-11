import Styled from 'styled-components'

const RenoContainer = Styled.div `
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  main{
    height: 100%;
  }

`

const Scorll = Styled.div `
  background: #fff;
  padding: .64rem 0;
`

const Header = Styled.header `
  background: #fff;
  width: 100%;
  height: .64rem;
  text-align: center;
  line-height: .64rem;
  font-size: .18rem;
  font-weight: 100;
  border-bottom: 1px solid #e6e6e6;
  position: absolute;
  z-index: 999;

`

const Nav = Styled.div `
  padding: .24rem .38rem 0 .38rem;
  display: flex;
  justify-content: space-between;
  div{
    text-align: center;
    img{
      width: .28rem;
      height: .32rem;
    }
    p{
      font-size: .12rem;
    }
  }

`
const Process = Styled.div `
  padding: 0 .2rem;
  div{
    h3{
      font-size: .17rem;
      padding: .2rem 0 .14rem 0;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      border-left: 1px solid #ccc;
      border-top: 1px solid #ccc;
      li{
        width: 33.33333%
        height: .9rem;
        text-align: center;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        img{
          width: .2rem;
          height: .2rem;
          margin: .24rem 0 .1rem 0;
        }
        p{
          font-size: .12rem;
        }
      }
    }
  }

`

const Questions = Styled.div `
  padding-top: .2rem;
  h3{
    color: #333;
    font-size: .15rem;
    overflow: hidden;
    font-family: inherit;
    font-weight: 600;
    line-height: 1.1;
    color: inherit;
    padding: 0 .2rem;
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
    padding: .2rem .2rem;
    ul{
      width: 10rem;
      display: flex;
      padding-left: .2rem;
      justify-content: space-between;
      li{
        width: 1.56rem;
        height: 1.12rem;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        h4{
          font-size: .14rem;
          padding: .18rem .22rem;
          font-weight: 600;
        }
        p{
          text-align: center;
          img{
            width: .18rem;
            height: .18rem;
            border-radius: 50%;
          }
          span{
            color: #9b9b9b;
            font-size: .1rem;
          }
        }
      }
    }
  }

`
const Activitys = Styled.div `
  padding: 0 .2rem;
  ul{
    overflow: hidden;
    width: 100%;
    border-top: 1px solid #ccc;
    padding: .28rem 0;
    li{
      width: 40%;
      height: .72rem;
      float: right;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
      b{
        position: absolute;
        top: .36rem;
        left: .16rem;
        font-size: .16rem;
        color: #fff;
        z-index: 100;
      }
      &:first-child{
        float: left;
        width: 58%;
        height: 1.5rem;
        b{
          top: 1.16rem;
        }
      }
      &:last-child{
        margin-top: .06rem;
      }
    }    
  }


`

export {
  RenoContainer,
  Scorll,
  Header,
  Nav,
  Process,
  Questions,
  Activitys
}