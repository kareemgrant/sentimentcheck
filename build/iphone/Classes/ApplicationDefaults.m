/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"rWO1AgfPRnBrmVQKbggq3x7bOSCbVlbX"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"7KiHqOd6w0XTpdJnwGkrVZWvE6WRQJmg"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"lL4RaUByiGRUCYEHkh04rSoaRjY9loW4"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"Y15FI6rchHxgCbrv805HfYUxSuuuh3vY"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"ZsL9PA3ax5xHHVbozO5E0FjYtBSuCXNQ"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"23bP1uXSBDh2VVO6PPnXdl6kPxwnyxOY"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
