import Styled from 'styled-components'

const NavListContainer = Styled.div `
  margin: .1rem 0 .1rem 0;
  overflow-x: auto;

`
const Wrapper = Styled.div `
  width: 8rem;
  padding-right: .12rem;
  display: flex;
  justify-content: space-around;
`

const Item = Styled.div `
  color: #999;
  width: .52rem;
  font-size: .12rem;
  text-align: center;
  img{
    display: block;
    height: .45rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  
`

export {
  NavListContainer,
  Wrapper,
  Item
}