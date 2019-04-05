import Styled from 'styled-components'

import border from 'components/styled/border'

const SearchContainer = Styled.div `
  position: relative;
  top: .26rem;
  left: .2rem;
  height: .31rem;

`

const InputContainer = Styled.div `
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background: ${ props => props.bgcolor };
  border-radius: ${ props => props.radius }px;
  img {
    width: .18rem;
    height: .18rem;
    margin-left: .1rem;
    margin-right: .1rem;
  }
  input {
    font-size: .14rem;
    color: #999;
    background: transparent;
    border: none;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    outline: none;
    font-weight: 400;
  }
`

const BorderedInputContainer = border({
  component: InputContainer,
  radius: 5,
  color: '#ee7530'
})

export {
  BorderedInputContainer,
  SearchContainer,
  InputContainer
}