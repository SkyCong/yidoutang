import Styled from 'styled-components'

const IndexContainer = Styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow-y: scroll;
  }
`

const BorderedNav = Styled.nav `
  width: 3rem;
  height: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: .28rem;
    width: .22rem;
    height: .03rem;
    border-radius: 2px;
    background: #ffda46;
    left: ${ props => props.dir === 'left' ? '21.6%' : '71.6%'};
    z-index: 1;
    transition: all 150ms ease-in;
  }
  div {
    width: 50%;
    text-align: center;
    color: #fff;
    position: relative;
    z-index: 2;
    &:first-child {
      color: ${ props => props.delayDir === 'left' ? '#2c2c2c;' : '#b5b7bd'};
      font-weight: ${ props => props.delayDir === 'left' ? 'bold;' : 'normal;'};
    }
    &:last-child {
      color: ${ props => props.delayDir === 'right' ? '#2c2c2c;' : '#b5b7bd'};
      font-weight: ${ props => props.delayDir === 'right' ? 'bold;' : 'normal;'};
    }
  }
`


const Header = Styled.header `
  height: .64rem;
  background: #ffda46;
  text-align: center;
  line-height: .64rem;
  font-size: .18rem;
  font-weight: 100;
  width: 100%;
  position: fixed;
  z-index: 999;
`

const Scroll = Styled.div `
  height: 100%;
  main{
    padding: .64rem 0 .44rem;
  }
`

const TableList = Styled.header `
  height: .44rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  
`

export {
  IndexContainer,
  Header,
  BorderedNav,
  TableList,
  Scroll
}