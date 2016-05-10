//
//  UMengShare.h
//  news
//
//  Created by Lifeix on 16/5/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"
#import "UMSocial.h"
#define UmengAppkey @"5730424be0f55acd85001eef"

@interface UMengShare : NSObject <RCTBridgeModule, UMSocialUIDelegate>

@property (nonatomic, strong) RCTResponseSenderBlock callback;

-(void) shareToSns:(NSDictionary *)aData callback:(RCTResponseSenderBlock)callback;
-(void) postSNSWithTypes:(NSArray *) type params:(NSDictionary *)params callback:(RCTResponseSenderBlock)callback;

@end
