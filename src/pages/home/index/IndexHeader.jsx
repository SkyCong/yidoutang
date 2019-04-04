import React, { Component } from 'react'

import {
  TableList,
  BorderedNav
} from './IndexStyled'

export default class CategoriesHeader extends Component {
  constructor(props) {
    super(props)
    this.handleSwich = this.handleSwich.bind(this)

    this.state = {
      dir: 'right',
      delayDir: 'right'
    }
  }
  render() {
    return (
      <TableList>
        <BorderedNav dir={this.state.dir} delayDir={this.state.delayDir}>
          <div onClick={() => this.handleSwich('left')}>关注</div>
          <div onClick={() => this.handleSwich('right')}>发现</div>
        </BorderedNav>
      </TableList>
    )
  }

  handleSwich(dir) {
    this.setState({
      dir
    })
    
    setTimeout(() => {
      this.setState({
        delayDir: dir
      })
    }, 300)

    this.props.onSwitch(dir)
  }
}
