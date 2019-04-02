import Styled from 'styled-components'

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

export {
  CookBookContainer,
  Header
}