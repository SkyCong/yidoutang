import Styled from 'styled-components'

const HomeContainer = Styled.div `
  height: 100%;
  background: #fff;
  position: relative;
  .am-tabs-tab-bar-wrap{
    height : 48px;
    .am-tab-bar-bar:before{
      display: none;
    }
  }

`

export {
  HomeContainer
}