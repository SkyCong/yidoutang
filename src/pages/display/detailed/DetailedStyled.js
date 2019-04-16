import Styled from 'styled-components'

const Image = Styled.div `
  width: 100%;
  img{
    width: 100%;
    height: 100%;
  }
  h1{
    width: 100%;
    padding: 0 .2rem;
    position: absolute;
    top: .3rem;
    svg{
      float: left;
      width: 1.4em;
      height: 1.4em;
      &:last-child{
        float: right;
      }
    }
  }

`

const Main = Styled.div `
  padding-bottom: .45rem;
  header{
    background: #fff;
    padding: .2rem;
    margin-bottom: .08rem;
    div{
      overflow: hidden;
      img{
        float: left;
        border-radius: 50%;
        width: .4rem;
        height: .4rem;
      }
      span{
        float: left;
        font-size: .12rem;
        color: #666;
        padding: .12rem;
      }
      b{
        float: right;
        line-height: .24rem;
        text-align: center;
        width: .6rem;
        height: .24rem;
        background: #ffda46;
        border-radius: .04rem;
      }
    }
    p{
      font-size: .14rem;
      padding: .18rem 0;
    }
  }
  main{
    background: #fff;
    overflow: hidden;
    h1{
      padding: .22rem;
    }
    div{
      width: 100%;
      float: left;
      padding: 0 .2rem;
      img{
        margin-top: .08rem;
        float: left;
        border-radius: 50%;
        width: .3rem;
        height: .3rem;
      }
      ul{
        float: right;
        width: 84%;
        border-bottom: 1px solid #e8e9eb;
        li{
          padding: .15rem 0;
          font-size: .1rem;
          &:last-child{
            font-size: .14rem;
          }
          svg{
            float: right;
            width: 1.4em;
            height: 1.4em;
          }
        }
      }      
    }
  }
`

const Footer = Styled.div `
  width: 100%;
  background: #fff;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  display: flex;
  z-index: 999;
  div{
    width: 25%;
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    background: #fff;
    svg{
      width: 1em;
      height: 1em;
    }
  }

`


const Scroll = Styled.div `
  height: 100%;

`

export {
  Image,
  Main,
  Footer,
  Scroll
}