import Styled from 'styled-components'

const Header = Styled.div `
  height: .64rem;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  i{
    color: #999;
    font-size: .13rem;
    position: absolute;
    width: .4rem;
    height: .4rem;
    top: .22rem;
    right: 0;
    line-height: .4rem;
    text-align: center;
    background: #fff;
  }
`
const SearchOn = Styled.div `
  display: none;
`
const Main = Styled.div `
  height: 3.23rem;
  padding: .2rem;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  h3{
    font-size: .16rem;
    padding-bottom: .18rem;
  }
  ul{
    li{
      float: left;
      height: .35rem;
      line-height: .35rem;
      text-align: center;
      padding: 0 .1rem;
      margin: 0 .14rem .14rem 0;
      font-size: .1rem;
      background: #f7f7f7;
      border-radius: 4px;
      padding: 0 .12rem;
    }
  }
`

const MainList = Styled.div `

  display: ${ props => props.bool === true ? 'block' : 'none'};
  width: 100%;
  height: 6.3rem;
  background: #fff;
  position: absolute;
  top: .64rem;
  z-index: 100;
  ul{
    li{
      height: .5rem;
      line-height: .5rem;
      padding-left: .2rem;
      font-size: .14rem;
      color: #757575;
      border-bottom: 1px solid #e6e6e6;
      &:hover{
        background: #eee;
      }
    }
  } 

`

const SearchListContainer = Styled.div `

`

const ListNav = Styled.div `

`


const ListCommand = Styled.div `

`
export {
  Header,
  SearchOn,
  Main,
  MainList,
  SearchListContainer,
  ListNav,
  ListCommand
}