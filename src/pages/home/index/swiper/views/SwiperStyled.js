import Styled from 'styled-components'

const SwiperContainer = Styled.div `
  height: 0;
  font-size: 0;
  padding-bottom: 43%;
  margin: .1rem 0 ;
  position: relative;
  .am-carousel-wrap{
    display: none;
  }
  img{

    border-radius: .06rem;
  }
`

export {
  SwiperContainer
}