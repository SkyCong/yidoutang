import Styled from 'styled-components'
import border from 'components/styled/border'

const CategoriesContainer = Styled.div `
  display: flex;
  flex-direction: column;
`

const Nav = Styled.nav `
  width: 1.43rem;
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
      color: ${ props => props.delayDir === 'left' ? '#ee7530;' : '#fff'};
    }
    &:last-child {
      color: ${ props => props.delayDir === 'right' ? '#ee7530;' : '#fff'};
    }
  }
`

const BorderedNav = border({
  component: Nav,
  color: '#fff',
  radius: 15
})

const CookBookContainer = Styled.div `
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow-y: scroll;
  }
`

const Header = Styled.header `
  height: .64rem;
  background: #ee7530;
  text-align: center;
  line-height: .64rem;
  font-size: .18rem;
  color: #fff;
  font-weight: 100;
  
`
const TableList = Styled.header `
height: .43rem;
background: #00ff66;
display: flex;
justify-content: center;
align-items: center;
  
`

export {
  CategoriesContainer,
  Header,
  BorderedNav,
  CookBookContainer,
  TableList
}