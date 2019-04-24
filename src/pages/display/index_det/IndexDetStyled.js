import Styled from 'styled-components'
import ellipsis from 'components/styled/ellipsis'


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
  height: 100vh;
  h3{
    width: 100%;
    background: #fff;
    font-weight: normal;
    overflow: hidden;
    position: absolute;
    z-index: 999;
    top: 1rem;
    left: 0;
    span{
      float: left;
      font-size: .11rem;
      color: #474747;
      width: .6rem;
      height: .2rem;
      line-height: .2rem;
      text-align: center;
      &:last-child{
        border-left: 1px solid #aaa;
        color: #b1b1b1;
      }
    }
  }
  main{
    height: 100%;
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

const EllipsisH5 = ellipsis({
  component: Styled.h5 ``,
  lineClamp: 2
})

const EllipsisP = ellipsis({
  component: Styled.p ``,
  lineClamp: 3
})


export {
  IndexListContainer,
  ListCommand,
  EllipsisH5,
  EllipsisP
}