import Styled from 'styled-components'

const NavListContainer = Styled.div `
  margin: .1rem 0 .1rem 0;
  overflow-x: auto;
  touch-action: none;
  position: relative;
  height: .64rem;
  ul{
    width: 9rem;
    padding: 0 .1rem;
    padding-right: .12rem;
    display: flex;
    justify-content: space-around;    
    li{
      color: #333;
      width: .52rem;
      font-size: .12rem;
      display:flex;
      align-items:center;
      flex-direction: column;
      img{
        display: block;
        width: .32rem;
        height: .32rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
  }

  div{
    margin : auto;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    width: .4rem;
    height: .03rem;
    background: #ffda46;
    border-radius: 2px;
  }

`

export {
  NavListContainer
}