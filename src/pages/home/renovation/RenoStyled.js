import Styled from 'styled-components'

const RenoContainer = Styled.div `
  background: #fff;
  display: flex;
  flex-direction: column;

`

const Header = Styled.header `
  height: .64rem;
  text-align: center;
  line-height: .64rem;
  font-size: .18rem;
  font-weight: 100;

`

const Nav = Styled.div `
  padding: .2rem .38rem;
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
      padding: .2rem 0;
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

const Questions = Styled.header `
  height: .64rem;
  text-align: center;
  line-height: .64rem;
  font-size: .18rem;
  font-weight: 100;

`


export {
  RenoContainer,
  Header,
  Nav,
  Process,
  Questions
}