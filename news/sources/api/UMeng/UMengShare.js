var React = require('react-native')

var {
    NativeModules
} = React

var UMengShare = NativeModules.UMengShare;

/**
 分享到第三方平台
 
 @param data 你要分享到sns平台的内容 是个字典对象 包括url：链接 image：图片 title：标题 text：内容
 @param callback 实现分享完成后的回调
**/
module.exports = {
    presentSnsIconSheetView: function(data, callback){ //默认分享，包括微信，微博
        UMengShare.presentSnsIconSheetView(data, callback);
    },
    wechatSessionShare: function(data, callback){ //分享到微信好友
        UMengShare.wechatSessionShare(data, callback);
    },
    wechatTimelineShare: function(data, callback) { //分享到微信朋友圈
    	UMengShare.wechatTimelineShare(data, callback);
    },
    sinaShare: function(data, callback) { //分享到新浪微博
    	UMengShare.sinaShare(data, callback);
    }
};
