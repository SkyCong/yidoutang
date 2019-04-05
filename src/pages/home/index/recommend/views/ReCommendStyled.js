import Styled from 'styled-components'

const RecommendContainer = Styled.div `
  height: 2.79rem;
  background: #fff;
  padding-bottom: .08rem;
  h3{
    color: #333;
    font-size: .18rem;
    font-weight: bold;
    margin: .2rem 0;
    overflow: hidden;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    span{
      float: right;
      color: #999;
      font-size: .12rem;
      margin-top: .05rem;
    }
  }
`
const ReCommendUIContainer = Styled.div `


`
export {
  RecommendContainer,
  ReCommendUIContainer
}