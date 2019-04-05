import React from 'react'

import { TabBar } from 'antd-mobile';

import Index from './index/Index'
import Look from './look/Look'

import index from 'assets/images/icon/index.png'
import indexActive from 'assets/images/icon/index-active.png'
import look from 'assets/images/icon/look.png'
import lookActive from 'assets/images/icon/look-active.png'
import renovation from 'assets/images/icon/renovation.png'
import renovationActive from 'assets/images/icon/renovation-active.png'
import my from 'assets/images/icon/my.png'
import myActive from 'assets/images/icon/my-active.png'

export default class HomeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'index',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'absolute', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#999"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${index}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${indexActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'index'}
            onPress={() => {
              this.setState({
                selectedTab: 'index',
              });
            }}
            data-seed="logId"
          >

            <Index></Index>

          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${look}) center center /  18px 18px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${lookActive}) center center /  18px 18px no-repeat` }}
              />
            }
            title="看图"
            key="look"
            selected={this.state.selectedTab === 'look'}
            onPress={() => {
              this.setState({
                selectedTab: 'look',
              });
            }}
            data-seed="logId1"
          >
            <Look></Look>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${renovation}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${renovationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="装修"
            key="renovation"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <div>装修</div>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: my }}
            selectedIcon={{ uri: myActive }}
            title="我"
            key="my"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <div>我</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}