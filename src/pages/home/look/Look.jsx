import React, { Component } from 'react'

import http from 'utils/fetch'
import BScroll from 'better-scroll'
import Masonry from 'react-masonry-component'

import {
  withRouter
} from 'react-router-dom'

import {
  LookContainer,
  Header,
  Nav,
  NavList,
  LookList
} from './LookStyled'

import Search from 'components/search/Search'
import LookListUI from './looks/LookListUI'

class Look extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
    // this.fetchData1()
    this.state = {
      tags: [],
      groups: [],
      type: [],
      pics: [],
      dis: false,
      val: "客厅",
      page: 1,
      route: props.history
    }
    
    this.fetchUpData()
    this.handleSwich = this.handleSwich.bind(this)

  }
  render() {
    
    let tagData = this.state.tags  || []    

    return (
      <LookContainer>
        <Header>          
          <Search
            hasborder={false}
            bgcolor="#f4f4f4"
            radius={30}
          ></Search>
          <Nav>
            {
              tagData.slice(0,4).map(value => (
                <span key={value.key} 
                onClick={
                  () => this.handleSwich(value.key,this.state.dis)
                }>                  
                  {value.name}ⅴ
                </span>  
              ))
            }
            {
              tagData.slice(4,5).map(value => (
                <span key={value.key}  
                onClick={
                  () => {this.handleSwich(value.key,this.state.dis)
                    console.log(0)
                  }  
                }>
                  •••
                </span>  
              ))   
            }
          </Nav> 

          <NavList className={this.state.dis === false ? 'hide' : 'show'}>
            {
              tagData.slice(0,4).map(value => (
                <div type={this.state.type} key={value.key} className={value.key === this.state.type ? 'show' : 'hide'}> 
                  {
                    value.groups.map(values => (
                      <section key={values.name}>
                        <h5>{values.name}</h5>
                        <ul>
                          {
                            values.sonTags.map(valuess => (
                              <li key={valuess.title} onClick={() => 
                                {
                                  this.setState({
                                    val : valuess.title,
                                    page : 1,
                                    bool : true,
                                    dis : false,
                                    pics: []
                                  }, function(){
                                    this.fetchUpData()
                                  }
                                  )
                                }
                                
                              }
                              >
                                {valuess.value}
                              </li>                
                            ))
                          } 
                        </ul>
                      </section>
                    ))
                  } 
                  <p>
                    <i>
                    <svg t="1554731265189"  style={{verticalAlign : 'text-top' , paddingRight : '.1rem'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2818"><path d="M905.615621 524.965532c0-132.931319-65.364876-256.560237-174.885151-331.940698v-0.031008c-1.24032-0.868224-2.356608-1.922496-3.627936-2.790721l-0.248064 0.403105a30.573893 30.573893 0 0 0-18.480771-5.891522 31.256069 31.256069 0 0 0-29.953734 32.465382 30.635909 30.635909 0 0 0 14.232675 24.341284l-0.124032 0.186049a340.839996 340.839996 0 0 1 151.071002 283.289137c0 185.272833-148.559354 336.188795-332.777914 340.653948l39.194119-39.194119a30.759941 30.759941 0 0 0 11.752034-22.821892 31.225061 31.225061 0 0 0-29.953734-32.465381 30.728933 30.728933 0 0 0-23.876164 10.356673l-0.372096-0.372096-116.5901 116.652117 116.90018 113.582324 0.31008-0.31008a30.697925 30.697925 0 0 0 23.6281 13.147394 31.256069 31.256069 0 0 0 32.403366-30.015749 30.914981 30.914981 0 0 0-13.860578-26.542853l0.744192-0.7752-40.341415-39.225127c218.451398-4.434145 394.855941-183.164288 394.855941-402.669959M487.410652 184.652672l-38.139847 37.085575 0.744192 0.7752a30.759941 30.759941 0 0 0-13.860578 26.542853c0.682176 17.240451 15.162915 30.697925 32.403365 29.984741a30.697925 30.697925 0 0 0 23.628101-13.116386l0.279072 0.31008 116.869172-113.582324-116.528084-116.590101-0.372096 0.31008a30.697925 30.697925 0 0 0-23.907173-10.325665c-17.209443 0.651168-30.604901 15.193923-29.953733 32.434373a30.945989 30.945989 0 0 0 11.876066 22.883908l41.054599 41.085608C274.323638 128.373143 99.407479 306.42111 99.407479 524.99654c0 134.109624 66.450156 259.071886 177.675872 334.266299l34.728966-51.411273a340.964028 340.964028 0 0 1-150.388827-282.855026c0-182.947232 144.931417-332.343802 325.987162-340.343868" p-id="2819" fill="#bfbfbf"></path></svg>
                    </i>
                    重 置
                  </p> 
                </div>
              ))
            }      
                  
            {
              tagData.slice(4,5).map(value => (
                <div type={this.state.type} key={value.key} className={value.key === this.state.type ? 'show' : 'hide'}> 
                  <ol>
                    {
                      value.sonTags.map(values => (
                        <li key={values.title}>按照{values.title}排序</li>
                      ))
                    } 
                  </ol>
                  <p>
                    <i>
                    <svg t="1554731265189"  style={{verticalAlign : 'text-top' , paddingRight : '.1rem'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2818"><path d="M905.615621 524.965532c0-132.931319-65.364876-256.560237-174.885151-331.940698v-0.031008c-1.24032-0.868224-2.356608-1.922496-3.627936-2.790721l-0.248064 0.403105a30.573893 30.573893 0 0 0-18.480771-5.891522 31.256069 31.256069 0 0 0-29.953734 32.465382 30.635909 30.635909 0 0 0 14.232675 24.341284l-0.124032 0.186049a340.839996 340.839996 0 0 1 151.071002 283.289137c0 185.272833-148.559354 336.188795-332.777914 340.653948l39.194119-39.194119a30.759941 30.759941 0 0 0 11.752034-22.821892 31.225061 31.225061 0 0 0-29.953734-32.465381 30.728933 30.728933 0 0 0-23.876164 10.356673l-0.372096-0.372096-116.5901 116.652117 116.90018 113.582324 0.31008-0.31008a30.697925 30.697925 0 0 0 23.6281 13.147394 31.256069 31.256069 0 0 0 32.403366-30.015749 30.914981 30.914981 0 0 0-13.860578-26.542853l0.744192-0.7752-40.341415-39.225127c218.451398-4.434145 394.855941-183.164288 394.855941-402.669959M487.410652 184.652672l-38.139847 37.085575 0.744192 0.7752a30.759941 30.759941 0 0 0-13.860578 26.542853c0.682176 17.240451 15.162915 30.697925 32.403365 29.984741a30.697925 30.697925 0 0 0 23.628101-13.116386l0.279072 0.31008 116.869172-113.582324-116.528084-116.590101-0.372096 0.31008a30.697925 30.697925 0 0 0-23.907173-10.325665c-17.209443 0.651168-30.604901 15.193923-29.953733 32.434373a30.945989 30.945989 0 0 0 11.876066 22.883908l41.054599 41.085608C274.323638 128.373143 99.407479 306.42111 99.407479 524.99654c0 134.109624 66.450156 259.071886 177.675872 334.266299l34.728966-51.411273a340.964028 340.964028 0 0 1-150.388827-282.855026c0-182.947232 144.931417-332.343802 325.987162-340.343868" p-id="2819" fill="#bfbfbf"></path></svg>
                    </i>
                    重 置
                  </p> 
                </div>  
              ))
            }
            <footer onClick={() => this.handleBay(this.state.dis)}></footer>
          </NavList> 

        </Header>


        <LookList id="look_scroll">
          <Masonry 
            className={'my-gallery-class'} // default ''
            elementType={'main'} // default 'div'
            options={{transitionDuration: 2, transitionProperty: 'width'}} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            // imagesLoadedOptions={imagesLoadedOptions} // default {}
          >
            <LookListUI {...this.state}/>
          </Masonry>
        </LookList>
          
      </LookContainer>
    )
  }



  componentDidMount() {

    let _this = this
    let lookListScroll = new BScroll('#look_scroll',{
      click: true
    })

    lookListScroll.on('scrollEnd', function(){
      if (this.y <= this.maxScrollY) {
        _this.setState({
          page: _this.state.page + 1
        })
        _this.fetchUpData()
      }
      this.refresh()
    })
    
  }

  async fetchData(){
    let result = await http.get('/api/navList')
    if(result){
      this.setState({
        tags: result.data.tags
      })
    }
  }
  // async fetchData1(){
  //   let result1 = await http.get('/dd/v2/movie/coming_soon?count=10&start=0')
  //   console.log('00000'+result1)

  // }
  async fetchUpData(){
    let result = await http.get(`/www/apiv3/case/album?space=${this.state.val}&page=${this.state.page}`)
      this.setState({
        pics: [
          ...this.state.pics,
          ...result.data.pics
        ]
      })
      // console.log(result)
  }

  handleSwich(type,dis) {
    dis = type === this.state.type ? !dis : true
    this.setState({
      type,
      dis
    })
  }
  
  handleBay(dis){
    dis = false  
    this.setState({
      dis
    })  
  }
}

export default withRouter(Look)