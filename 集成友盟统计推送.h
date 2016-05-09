//
//  集成友盟统计推送.h
//  umeng统计Appkey：5730424be0f55acd85001eef
    umeng推送Appkey：
//
//  Created by Lifeix on 16/5/9.
//

1> XCode中导入/news/source/common/UMeng文件夹，并在AppDelegate+UMeng.h中填写申请的UmengAppkey;

/////////////////////////////////
2> AppDelegate.m中
   (1)引用#import "AppDelegate+UMeng.h"和
                     #import "RCTUmengPush.h"两个头文件;

   (2)didFinishLaunchingWithOptions方法中添加：
    //注册umeng统计
    [self registerUMeng];
    //注册友盟推送
    [RCTUmengPush registerWithAppkey:@"your app key" launchOptions:launchOptions];(Appkey为申请的UmengAppkey)

   (3)添加一下几个方法：

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
    //获取deviceToken
    [RCTUmengPush application:application didRegisterDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
{
    //获取远程推送消息
    [RCTUmengPush application:application didReceiveRemoteNotification:userInfo];
}

/////////////////////////////////
3>添加依赖框架(Framework)和编译器选项 TARGETS-->Build Phases-->Link Binary With Libraries--> + -->libz.tbd

/////////////////////////////////
4>在index.ios.js中引入UmengPush
    var UmengPush = require('./sources/api/UMeng/UmengPush');
  引入React三个类：
    NativeAppEventEmitter, //
    NativeModules, //
    DeviceEventEmitter, //
  在componentDidMount中添加：
    UmengPush.getDeviceToken(deviceToken => {
        console.log(deviceToken);
    });
    UmengPush.didReceiveMessage(message => {
        console.log("didReceiveMessage:", message);
    });
    UmengPush.didOpenMessage(message => {
        console.log("didOpenMessage:", message);
    });
5> 友盟统计api在'./sources/api/UMeng/MobClick'文件中，在项目需要统计的地方引入调用即可。

