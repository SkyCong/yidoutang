import Styled from 'styled-components'

const IndexListContainer = Styled.div `
  background: #fff;
  height: 100%;
  h1{
    background : #fff;
    width: 100%;
    font-size: 14px;
    padding: .2rem;
    text-align: center;
    color: #333;
    position: fixed;
    z-index: 999;
    top: 0;
    i{
      float: left;
      svg{
        width: 1.2em;
        height: 1.2em;
        vertical-align: text-top;
      }
    }
  }
`

const ListCommand = Styled.div `
  height: 100%;
  main{
    padding-top: .6rem;
    div{
      padding: 10px;
      img{
        width: 100%;
        height: 100%;
      }
      &:last-child{
        padding: 10px;
        line-height: 2em;
      }
    }

  }
`
export {
  IndexListContainer,
  ListCommand
}