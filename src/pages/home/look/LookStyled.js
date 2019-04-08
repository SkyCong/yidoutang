import Styled from 'styled-components'

const LookContainer = Styled.div `
  touch-action: none;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Scorll = Styled.div `
  padding: .64rem 0;
`

const Header = Styled.header `
  width: 100%;
  height: 1.08rem;
  position: fixed;
  background: #fff;
  text-align: center;
  font-size: .18rem;
  font-weight: 100;
  z-index: 999;
`

const Nav = Styled.header `
  padding: .48rem .2rem .1rem .4rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  span{
    display: block;
    font-size: .12rem;
    color: #757575;
    &:last-child{
      color: #333333;
    }
  }

`

const NavList = Styled.div `
  display: ${ props => props.dis === true ? 'block' : 'none'};
  ul{  
    position: relative;
    height: 2rem;
    width: 100%;
    background: #fff;
    z-index: 101;
    li{
    }
  }

  div{
    position: fixed;
    background: rgba(0,0,0,0.8);
    width: 100vw;
    height: 100vh;
    z-index: 100;   
  }
`

// display: ${ props => props.dis === true ? 'block' : 'none'};
// position: relative;
// height: 2rem;
// width: 100%;
// background: #f0f;
// z-index: 101;
// transition: all .2s linear

// div{
//   position: fixed;
//   background: rgba(0,0,0,0.4) !important;
//   width: 100vw;
//   height: 100vh;
//   z-index: 100;   
// }

export {
  LookContainer,
  Scorll,
  Header,
  Nav,
  NavList
}