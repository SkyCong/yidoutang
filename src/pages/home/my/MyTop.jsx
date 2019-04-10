import React, { Component } from 'react'

import {
  MyTopContainer
} from './MyStyled'

export default class MyTop extends Component {
  render() {
    return (
      <MyTopContainer>
        <div>
          <img src='http://m.xishiqu.com/m/images/default-avatar.png' alt='login'/>
          <h3>
            点击登录账号
            <p>登录后，收藏的内容就不会丢下了</p>
          </h3> 
          <i>
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1666"><path d="M334.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l288.64-288.64A50.56 50.56 0 0 0 704 512a47.36 47.36 0 0 0-14.08-33.28L401.28 192a47.36 47.36 0 0 0-67.2 0z" p-id="1667"></path></svg>
          </i>
        </div>
      </MyTopContainer>  
    )
  }
}


