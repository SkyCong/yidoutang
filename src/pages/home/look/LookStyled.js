import Styled from 'styled-components'

const LookContainer = Styled.div `
  touch-action: none;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  main{
    height: 100%;
  }

`

const Scorll = Styled.div `
  padding: .64rem 0;
`

const Header = Styled.header `
  width: 100%;
  height: .64rem;
  background: #fff;
  text-align: center;
  line-height: .64rem;
  font-size: .18rem;
  font-weight: 100;
`

const Nav = Styled.header `
  padding: 0 .2rem 0 .4rem;
  height: .43rem;
  background: #ff0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  span{
    display: block;
  }

`

const NavList = Styled.div `
  padding:.2rem;
  display: ${ props => props.dis === true ? 'block' : 'none'};
  position: relative;
  height: 2rem;
  width: 100%;
  background: #f0f;
`

export {
  LookContainer,
  Scorll,
  Header,
  Nav,
  NavList
}