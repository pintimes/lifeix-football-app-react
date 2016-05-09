var React = require('react-native');

var UMengManager = NativeModules.UMengManager;

var MobClick = {
	//记录页面加载
  logPage: function(page){
      UMengManager.logPage(page);
  },

  //记录页面退出
  endLogPageView: function(page){
      UMengManager.endLogPageView(page);
  },

  //记录事件
  logEvent: function(event, data){
      UMengManager.logEvent(event, data);
  }
};

module.exports = MobClick;