import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import cssModule from './index.module.scss'
console.log({
  cssModule
})
export default class Index extends Component<any, any> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      imgs: new Array(20).fill(null)
    }
  }

  componentWillMount () {
    // this.sleep().then(() => {
    //   this.setState({
    //     imgs: new Array(20).fill(null)
    //   })
    // })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  sleep() {
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
    })
  }

  render () {
    const { imgs } = this.state
    return (
      <View>
        <View style={{height: '20vh'}}></View>
        <View className={cssModule.flexbox}>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
          <View style={{height: '100px'}}></View>
        </View>
        {
          imgs.map(img => {
            return (
              <View>
                <Image 
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561010079471&di=b7920a129b1aab2b4766bcf67603fb03&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn11%2F209%2Fw1080h1529%2F20180813%2Fb7a3-hhqtawx8567378.jpg"
                  lazyLoad
                />
              </View>
            )
          })
        }
      </View>
    )
  }
}
