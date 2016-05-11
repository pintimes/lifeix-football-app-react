'use strict';
/**
需要导入计时器类库 npm i react-timer-mixin --save
**/
var React = require('react-native');
var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');

var {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} = React;

var width = Dimensions.get('window').width;

var ImageTimer = React.createClass({

  // 注册定时器
  mixins: [TimerMixin],
  
  getInitialState() {

    //props 
    var data = this.props.data;
    var timer =  this.props.timer;
    var imgStyle = this.props.imgStyle;
    return {
      currentPage: 0
    }
  },

  render: function() {
      return(
          <View style={styles.imgStyle}>
              <ScrollView
                ref = 'scrollView'
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={this.onAnimationEnd}
                onScrollEndDrag={this.onScrollEndDrag}
                onScrollBeginDrag={this.onScrollBeginDrag}
               >
                  {this._renderCycleImages()}
              </ScrollView>

              <View style = {styles.pageViewStyle}>
                  {this.renderPageIndicator()}
              </View>
        </View>
      )
    },

    componentDidMount() {
      // 开启定时器
      this.startTimer();
    },

    // 开启定时器
    startTimer(){
        var data = this.props.data;
        var scrollView = this.refs.scrollView;
        var imagesCount = data.length;
        this.timer = this.setInterval(function() {
          // 设置临时页码
          var activePage;
          if((this.state.currentPage + 1) >=imagesCount ){
              activePage = 0;
          }else{
              activePage = this.state.currentPage + 1;
          };
          var currentX = activePage * width;
          scrollView.scrollResponderScrollTo({x:currentX,y:0,animated:true});
          this.setState({
            currentPage:activePage
        });
      },this.props.timer)
    },

    // 加载图片
    _renderCycleImages() {
      var allImages = [];
      var data = this.props.data;
      for (var i = 0; i < data.length; i++) {
        allImages.push(
          <TouchableOpacity onPress = {this.props.click.bind(this, data[i])}>
            <Image
              key = {i}
              source = {{uri: data[i].imgs[1]}}
              style = {styles.imageStyle}
            />
            <View style = {styles.titleLabelStyle}>
              <Text style = {styles.titleTextStyle}>
                  {data[i].title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }
      return allImages;
    },

    // 加载图片指示器
    renderPageIndicator() {
      var allCycle = [];
      var style;
      var data = this.props.data;
      for (var i = 0; i < data.length; i++){
        // 判断是否是当前页
        style = (i == this.state.currentPage)? {color:'red'} :{color:'white'};
        allCycle.push(
            <Text key = {i} style = {styles.pageCircleStyle, style}>&bull;
            </Text>
        );
      }
      return allCycle;
    },

    // 当一帧滚动完毕的时候
    onAnimationEnd(e){
      var offSetX = e.nativeEvent.contentOffset.x;
      var currentPage = Math.floor(offSetX/width);
      // 更新状态
      this.setState({
          currentPage: currentPage
        });
    },

    // 停止拖拽函数中，开启定时器
    onScrollEndDrag(){
        this.startTimer();
    },

  // 开始拖拽函数中，清除定时器
  onScrollBeginDrag(){
      this.clearInterval(this.timer);
    },
});

var styles = StyleSheet.create({
  imageStyle: {
    width: width,
    height: width * 0.5
  },
  titleLabelStyle: {
    width: width,
    height: 30,
    bottom: 30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(222,222,222,0.6)'
  },
  titleTextStyle: {
    textAlign: 'center',
    fontSize: 18
  },
  pageViewStyle: {
    flexDirection:'row',
        width:width,
        height:30,
        backgroundColor:'rgba(222,222,222,0.6)',
        position:'absolute',
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
  },  
  pageCircleStyle:{
        fontSize:30,
        marginLeft:5
  },
});

module.exports = ImageTimer;
