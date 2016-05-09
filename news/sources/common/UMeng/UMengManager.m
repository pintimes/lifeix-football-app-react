//
//  UMengManager.m
//
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "UMengManager.h"

#import "RCTBridge.h"
#import "RCTUtils.h"

@implementation UMengManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

//记录页面加载
RCT_EXPORT_METHOD(logPage:(NSString *) page)
{
  [MobClick beginLogPageView:page];//("page"为页面名称)
}

//记录页面退出
RCT_EXPORT_METHOD(endLogPageView:(NSString *) page)
{
  [MobClick endLogPageView:page];//("page"为页面名称)
}

//记录事件
RCT_EXPORT_METHOD(logEvent:(NSString *)eventId attributes:(NSDictionary *)attributes)
{
  [MobClick event:(NSString *)eventId attributes:(NSDictionary *)attributes];
}
@end