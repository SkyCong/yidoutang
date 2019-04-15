import React, { Component } from 'react'
import http from 'utils/fetch'
import BScroll from 'better-scroll'

import {
  Image,
  Main,
  Footer,
  Scroll
} from './DetailedStyled'

import {
  withRouter
} from 'react-router-dom'


class Detailed extends Component {

  constructor(props) {
    super(props)
    this.fetchData(props.history.location.state.data.match_id)
    this.state = {
      DetailData: []
    }
  }

  render() {

    let data = this.props.history.location.state.data;
    console.log(data)
    let common = this.state.DetailData.common || []
    let commonUser = (this.state.DetailData.common && this.state.DetailData.common.user) || []
    let commentPreview = (this.state.DetailData.comment_preview && this.state.DetailData.comment_preview.comments) || []


    return (
      <>
        <Scroll id="detailed_scroll">
          <div>
            <Image>
              <img src={data.normal_image} alt={'sss'} />
              <h1 onClick={() => {this.props.history.push("/home")}}>
                <svg t="1555208405146" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2067"><path d="M768 160.853333L691.2 85.333333l-358.826667 353.706667L256 514.133333l76.8 75.946667L686.933333 938.666667l75.946667-75.093334-353.706667-348.586666z" p-id="2068" fill="#ffffff"></path></svg>
                <svg t="1555208492298" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2865"><path d="M102.4 409.6C46.08 409.6 0 455.68 0 512s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4C204.8 455.68 158.72 409.6 102.4 409.6zM921.6 409.6c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4S1024 568.32 1024 512C1024 455.68 977.92 409.6 921.6 409.6zM512 409.6c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4C614.4 455.68 568.32 409.6 512 409.6z" p-id="2866" fill="#ffffff"></path></svg>
              </h1>
            </Image>
            <Main>
              <header>
                <div>
                  <img src={commonUser.user_pic} alt={'user'}/>
                  <span>{commonUser.user_name}</span>
                  <b>+关注</b>              
                </div>
                <p>{common.content}</p>
              </header>
              <main>
                <h1>最新评论</h1>
                {          
                  commentPreview.map(value => (
                    <div key={value.post_id}>
                      <img src={value.user_pic} alt={'user'}/>
                      <ul>
                        <li>
                          {value.user_name}
                          <svg t="1555335581267" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2172"><path d="M1010.036364 339.781818c-13.963636-23.272727-41.890909-32.581818-65.163637-32.581818h-353.745454l79.127272-153.6c9.309091-18.618182 9.309091-41.890909 4.654546-65.163636-9.309091-18.618182-23.272727-37.236364-46.545455-41.890909l-93.090909-32.581819c-9.309091-4.654545-18.618182-4.654545-27.927272-4.654545-27.927273 0-55.854545 13.963636-69.818182 41.890909L237.381818 381.672727H55.854545c-13.963636 0-27.927273 4.654545-41.890909 18.618182-9.309091 9.309091-13.963636 23.272727-13.963636 41.890909v516.654546c0 32.581818 27.927273 60.509091 60.509091 60.509091h702.836364c37.236364 0 65.163636-23.272727 79.127272-55.854546L1024 418.909091c4.654545-32.581818 0-55.854545-13.963636-79.127273z m-409.6-214.109091l-79.127273 148.945455c-9.309091 23.272727-9.309091 51.2 4.654545 69.818182 13.963636 18.618182 37.236364 32.581818 60.509091 32.581818h358.4c4.654545 0 4.654545 0 4.654546 4.654545v9.309091l-181.527273 544.581818c0 4.654545-4.654545 4.654545-9.309091 4.654546H279.272727V451.490909l218.763637-367.709091c4.654545-4.654545 4.654545-4.654545 9.309091-4.654545h4.654545l88.436364 27.927272c4.654545 0 4.654545 4.654545 4.654545 4.654546-4.654545 9.309091-4.654545 9.309091-4.654545 13.963636zM204.8 456.145455v484.072727H74.472727V465.454545s0-4.654545 4.654546-4.654545l4.654545-4.654545h121.018182z" p-id="2173" fill="#515151"></path></svg>
                        </li>
                        <li>
                          {value.content}
                        </li>
                      </ul>
                    </div>    
                  ))  
                }
              </main>
            </Main>
          </div>
        </Scroll>
        
        <Footer>
          <div>
            <svg t="1555332313572"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2172"><path d="M907.636364 418.909091H605.090909c95.418182-90.763636 165.236364-418.909091-20.945454-418.909091-141.963636 0-114.036364 134.981818-158.254546 221.090909-39.563636 76.8-102.4 125.672727-144.290909 151.272727-27.927273 16.290909-46.545455 34.909091-46.545455 67.490909v488.727273c0 51.2 44.218182 93.090909 95.418182 93.090909h481.745455c44.218182 0 81.454545-39.563636 90.763636-81.454545 32.581818-141.963636 67.490909-293.236364 100.072727-430.545455 11.636364-53.527273-34.909091-90.763636-95.418181-90.763636z m46.545454 93.090909c-41.890909 176.872727-97.745455 421.236364-97.745454 421.236364-4.654545 23.272727-27.927273 44.218182-46.545455 44.218181H328.145455c-25.6 0-48.872727-20.945455-48.872728-46.545454V442.181818c0-16.290909 11.636364-20.945455 25.6-27.927273 48.872727-30.254545 118.690909-83.781818 162.909091-169.890909 16.290909-30.254545 23.272727-62.836364 30.254546-95.418181 16.290909-76.8 25.6-102.4 86.109091-102.4 30.254545 0 46.545455 11.636364 55.854545 37.236363 30.254545 76.8-20.945455 244.363636-79.127273 300.218182-13.963636 13.963636-18.618182 32.581818-11.636363 51.2 6.981818 16.290909 32.581818 30.254545 55.854545 30.254545h302.545455c16.290909 0 30.254545 2.327273 39.563636 13.963637 4.654545 6.981818 9.309091 16.290909 6.981818 32.581818zM151.272727 397.963636H69.818182c-25.6 0-46.545455 20.945455-46.545455 46.545455V977.454545c0 25.6 20.945455 46.545455 46.545455 46.545455h81.454545c25.6 0 34.909091-20.945455 34.909091-46.545455V442.181818c0-25.6-9.309091-44.218182-34.909091-44.218182zM139.636364 977.454545H69.818182V442.181818h69.818182v535.272727z" fill="#515151" p-id="2173"></path></svg>
            {common.zan_num}
          </div>

          <div>            
            <svg t="1555332387796" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4569"><path d="M 159.863 238.394 Z m 0 0 M 165.184 239.927 Z m 0 0 M 167.088 240.035 Z m 0 0 M 167.088 198.298 Z m 0 0 M 156.71 201.862 Z m 0 0 M 161.568 199.234 Z m 0 0 M 159.863 417.782 Z m 0 0 M 156.71 381.256 a 17.9297 17.9297 0 0 1 3.15306 -1.92423 c -1.11203 0.523804 -2.16445 1.17765 -3.15306 1.92423 Z m 0 0 M 165.184 419.317 Z m 0 0 M 167.088 419.428 Z m 0 0 M 167.088 377.691 Z m 0 0 M 161.568 378.628 Z m 0 0 M 161.568 558.021 Z m 0 0 M 156.71 560.65 Z m 0 0 M 167.088 557.085 Z m 0 0 M 785.225 453.227 H 371.539 c -12.3232 0 -22.2918 -11.511 -22.2918 -25.7416 c 0 -14.2252 9.96852 -25.7453 22.2918 -25.7453 h 413.686 c 12.3274 0 22.296 11.5201 22.296 25.7453 c 0.004215 14.2306 -9.96852 25.7416 -22.296 25.7416 Z m 0 0 M 785.225 661.575 H 371.539 c -12.3232 0 -22.2918 -11.5068 -22.2918 -25.7416 c 0 -14.2252 9.96852 -25.741 22.2918 -25.741 h 413.686 c 12.3274 0 22.296 11.5159 22.296 25.741 c 0 14.2348 -9.96852 25.7416 -22.296 25.7416 Z m 0 0" p-id="4570" fill="#515151"></path><path d="M 579.114 964.526 a 22.6572 22.6572 0 0 1 -13.5123 -4.46799 L 422.21 853.442 H 183.109 c -26.6688 0 -48.3814 -21.7162 -48.3814 -48.3892 V 251.837 c 0 -26.6688 21.7126 -48.3898 48.3814 -48.3898 h 790.551 c 26.6694 0 48.3856 21.721 48.3856 48.3898 v 553.216 c 0 26.673 -21.7162 48.3892 -48.3856 48.3892 h -258.718 L 593.993 958.95 a 22.6319 22.6319 0 0 1 -14.879 5.5764 Z M 183.109 248.745 c -1.70086 0 -3.09225 1.39561 -3.09225 3.09225 v 553.216 c 0 1.70507 1.39139 3.09646 3.09225 3.09646 h 246.601 c 4.86595 0 9.59524 1.57262 13.5129 4.46738 l 134.766 100.199 l 113.578 -99.0904 a 22.6536 22.6536 0 0 1 14.8839 -5.5758 h 267.209 c 1.70507 0 3.09706 -1.39561 3.09706 -3.09646 V 251.837 c 0 -1.70507 -1.395 -3.09225 -3.09706 -3.09225 H 183.109 Z m 0 0" p-id="4571" fill="#515151"></path><path d="M 147.484 634.352 H 47.5042 C 22.9787 634.352 3.01037 614.16 3.01037 589.351 V 108.759 c 0 -24.8126 19.9684 -45.005 44.4938 -45.005 h 670.664 c 24.5297 0 44.477 20.1923 44.477 45.005 v 117.337 h -45.2891 V 108.759 l -669.852 0.287791 l 0.798349 480.304 l 99.1813 -0.288393 v 45.2891 h 0.000602 Z m 0 0" p-id="4572" fill="#515151"></path></svg>
            {common.like_num}
          </div>

          <div>
            <svg t="1555332448889" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8053"><path d="M252.696 958.945c-10.15 0-19.869-3.176-28.11-9.186-14.833-10.728-22.133-28.663-19.052-46.822l45.165-263.944-191.656-186.81C45.826 439.24 41.21 420.37 46.957 402.906c5.666-17.406 20.498-29.89 38.686-32.511l264.944-38.536L469.065 91.757c8.23-16.501 24.708-26.704 43.042-26.704 18.38 0 34.858 10.222 43.006 26.677l118.423 240.13 264.918 38.535c18.044 2.598 33.228 15.431 38.672 32.7 5.622 17.456 0.96 36.253-12.182 49.08L773.24 638.991 818.496 902.9c3.11 17.761-4.363 36.18-19.049 46.858-8.14 5.966-17.87 9.142-28.077 9.142h-0.002a48.533 48.533 0 0 1-22.387-5.498L512.075 828.844 275.09 953.382c-6.825 3.627-14.593 5.563-22.394 5.563z m259.412-854.718c-3.435 0-6.408 1.847-7.951 4.94L376.606 367.66 91.259 409.164c-2.62 0.377-5.834 2.13-7.071 5.93-1.269 3.856 0.325 7.203 2.233 9.072l206.364 201.143-48.633 284.205c-0.44 2.594 0.22 6.213 3.408 8.511l0.102 0.074c1.89 1.38 3.781 1.67 5.035 1.67a8.778 8.778 0 0 0 4.095-1.024l255.29-134.16 255.092 134.12a9.128 9.128 0 0 0 4.198 1.02c1.269 0 3.166-0.28 4.982-1.61 2.739-1.99 4.106-5.32 3.544-8.527l-48.75-284.28 206.447-201.18c1.895-1.85 3.485-5.206 2.239-9.05l-0.063-0.192c-1.145-3.653-4.447-5.366-6.928-5.722l-285.33-41.507-127.517-258.574c-1.458-2.937-4.558-4.856-7.888-4.856z" p-id="8054" fill="#515151"></path></svg>
            {common.like_num+common.zan_num}
          </div>

          <div>
            <svg t="1555332480421" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8920"><path d="M769.529 364.586H570.917v39.724h198.612c21.939 0 39.722 17.784 39.722 39.72v436.946c0 21.939-17.784 39.724-39.722 39.724H253.138c-21.939 0-39.72-17.786-39.72-39.724V444.031c0-21.937 17.782-39.72 39.72-39.72H451.75v-39.724H253.138c-43.875 0-79.445 35.569-79.445 79.445v436.946c0 43.875 35.569 79.445 79.445 79.445h516.391c43.877 0 79.445-35.569 79.445-79.445V444.031c-0.001-43.875-35.568-79.445-79.445-79.445z m-388.7-122.154L491.472 131.79v371.825c0 10.971 8.892 19.861 19.863 19.861 10.967 0 19.859-8.89 19.859-19.861V134.063l108.14 108.353a19.798 19.798 0 0 0 14.062 5.837 19.826 19.826 0 0 0 14.024-5.799c7.778-7.758 7.778-20.328 0.038-28.088L524.299 70.919a19.814 19.814 0 0 0-14.042-5.839h-0.02a19.845 19.845 0 0 0-14.04 5.817L352.744 214.348c-7.758 7.758-7.758 20.328 0 28.084 7.76 7.762 20.328 7.762 28.085 0z" p-id="8921" fill="#515151"></path></svg>
            分享
          </div>
        </Footer>
      </>
     
    )
  }

  async fetchData(id){
    let result = await http.get('/www/apiv4/album/detail?&match_id='+id)
    console.log(result)
    if(result){
      this.setState({
        DetailData: result.data
      })
    }
  }

  
  componentDidMount() {
    new BScroll('#detailed_scroll',{
      click: true
    })
  }
}

export default withRouter(Detailed)