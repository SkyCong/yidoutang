import Styled from 'styled-components'


const RenListContainer = Styled.div `
  background: #fff;
  height: 100%;
  h1{
    background : #fff;
    width: 100%;
    font-size: 14px;
    text-align: center;
    padding: 20px;
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
  padding: 0 .2rem;
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
    ul{
      padding-top: .6rem;
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


export {
  RenListContainer,
  ListCommand
}