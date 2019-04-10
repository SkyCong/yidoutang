import Styled from 'styled-components'
import timg from 'assets/images/timg.jpg'

const MyTopContainer = Styled.div `
  height: 1.8rem;
  background: url(${timg});
  background-size: cover;
  div{
    padding-top: .6rem;
    color: #323232;
    overflow: auto;
    img{
      float: left;
      border-radius: 50%;
      width: .5rem;
      height: .5rem;
      margin: 0 .15rem 0 .2rem
    }
    h3{
      float: left;
      font-size: .16rem;
      margin: .04rem 0 .06rem 0;
      p{
        font-size: .12rem;
        font-weight: normal;
      }
    }
    i{
      float: right;
      width: .5rem;
      height: .5rem;
      text-align: center;
      line-height: .5rem;
      svg{
        width: 1.4em;
        height: 1.4em;
      }
    }
  }
`


const MyNavContainer = Styled.div `
  background: #fff;
  margin-bottom: .06rem;
  ul{
    overflow: auto;
    li{
      width: 25%;
      height: .6rem;
      float: left;  
      text-align: center;
      margin-bottom: .1rem;
      img{
        width: .22rem;
        height: .22rem;
        margin: .1rem 0;
      }
      p{
        font-size: .1rem
        color: #333;
      }

    }
  }
`

const MyListContainer = Styled.div `
  background: #fff;
  ul{
    padding-bottom: .13rem;
    li{
      height: .42rem;
      line-height: .42rem;
      border-bottom: 1px solid #e6e6e6;
      &:hover{
        background: #eee;
      }
      b{
        float: left;
        width: .6rem;
        height: 100%;
        text-align: center;
        svg{
          width: 1.2em;
          height: 1.2em;
          vertical-align: sub;
        }
      }
      span{
        float: left;
        font-size: .12rem;
        color: #595959;
      }
      i{
        width: .5rem;
        height: 100%;
        float: right;
      }
    }
  }
`

const MyContainer = Styled.div `
  background: #f8f8f8;
  height: 100%;
`

export {
  MyTopContainer,
  MyNavContainer,
  MyListContainer,
  MyContainer
}