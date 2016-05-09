//
//  AppDelegate+UMeng.m
//  awesomeMobile
//
//  Created by 陈光远 on 16/1/26.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "AppDelegate+UMeng.h"

#import "MobClick.h"


@implementation AppDelegate (UMeng)

- (void)registerUMeng
{
  //打开调试log的开关
//  [UMSocialData openLog:YES];

  //使用友盟统计
  [MobClick startWithAppkey:UmengAppkey reportPolicy:BATCH   channelId:nil];
  NSString *appVersion = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
  [MobClick setAppVersion:appVersion];
  [MobClick updateOnlineConfig];
  NSLog(@"-------registerUMeng");
}


@end
