import Styled from 'styled-components'

import border from 'components/styled/border'

const SearchContainer = Styled.div `

  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;  
  top: .26rem;
  left: .2rem;
  height: .31rem;
  width: 92%;
  img {
    width: .24rem;
    height: .24rem;
    margin-left: 2%;
  }
`

const InputContainer = Styled.div `
  width: 90%;
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
    line-height: .2rem;
    color: #999;
    height: 100%;
    background: transparent;
    border: none;
    flex: 1;
    outline: none;
    font-weight: 400;
  }
  svg{
    width: 1em;
    height: 1em;
    margin-right: .1rem;
  }
  input::-webkit-input-placeholder {
    color: #999;
  }

`

const BorderedInputContainer = border({
  component: InputContainer,
  width: '0 0 1px 0',
  color: '#ccc'
})

export {
  BorderedInputContainer,
  SearchContainer,
  InputContainer
}