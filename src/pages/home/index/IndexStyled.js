import Styled from 'styled-components'

const IndexContainer = Styled.div `
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
    width: 50%;
    height: 100%;
    border-radius: 15px;
    background: #fff;
    left: ${ props => props.dir === 'left' ? 0 : '50%'};
    z-index: 1;
    transition: all 300ms ease-in;
  }
  div {
    width: 50%;
    text-align: center;
    color: #fff;
    position: relative;
    z-index: 2;
    &:first-child {
      color: ${ props => props.delayDir === 'left' ? '#2c2c2c;' : '#b5b7bd'};
    }
    &:last-child {
      color: ${ props => props.delayDir === 'right' ? '#2c2c2c;' : '#b5b7bd'};
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

`


const TableList = Styled.header `
  height: .43rem;
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
  TableList
}