import Styled from 'styled-components'
import ellipsis from 'components/styled/ellipsis'

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
      em{
        font-weight: bold;
        color: #ffb000
      }    
    }
  } 

`

const SearchListContainer = Styled.div `
  background: #fff;
  height: 100%;
`

const ListNav = Styled.div `
  overflow-x: scroll;
  ul{
    width: 7.2rem;
    display: flex;
    justify-content: space-around;    
    li{
      font-size: .13rem;
      color: #b4b4b4;
      height: .37rem;
      text-align: center;
      line-height: .37rem;
      position: relative;
      &:hover{
        color: #4d4d4d;
        b{
          display: block;
          width: 100%;
          height: .03rem;
          background: #ffda46;
          border-radius: .04rem;
          position: absolute;
          bottom: 0;
          transition: all 150ms ease-in;
        }
      }
    }
  }

`


const ListCommand = Styled.div `
  padding: 0 .2rem;
  h3{
    font-weight: normal;
    overflow: hidden;
    padding-top: .1rem;
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
    ul{
      display: flex;
      flex-direction: column;
      li{
        padding: .1rem 0;
        width: 100%;
        border-bottom: 1px solid #ebebeb;
        h4{
          height: .3rem;
          line-height: .3rem;
          img{
            border-radius: 50%;
            width: .12rem;
            height: .12rem;
            float: left;
          }
          span{
            font-size: .1rem;
            color: #383838;          
            float: left;
            &:nth-child(3){
              color: #7c7c7c;
              float: right;
            }
          }
          i{
            float: right;
            svg{
              width: 1em;
              height: 1em;
            }
          }
        }
        div{
          float: left;
          width: 2rem;
          height: .93rem;   
          em{
            font-weight: bold;
            color: #ffb000
          }       
          h5{
            font-size: .16rem;             
          }
          p{
            font-size: .11rem;
            color: #838383;
          }
        }
        img{
          float: right;
          width: 1.19rem;
          height: .93rem;
          border-radius: .03rem;
        }
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
  Header,
  SearchOn,
  Main,
  MainList,
  SearchListContainer,
  ListNav,
  ListCommand,
  EllipsisH5,
  EllipsisP
}