# FootballWemediaApi.DeleteApi

All URIs are relative to *http://192.168.50.103:8080/football/wemedia*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteComment**](DeleteApi.md#deleteComment) | **DELETE** /comments/{commentId} | \u7528\u6237\u5220\u9664Comment


<a name="deleteComment"></a>
# **deleteComment**
> Comment deleteComment(userId, commentId)

\u7528\u6237\u5220\u9664Comment

\u7528\u6237\u5220\u9664Comment,\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Comment

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.DeleteApi()

var userId = "userId_example"; // {String} authorization

var commentId = "commentId_example"; // {String} \u8BC4\u8BBAId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteComment(userId, commentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| authorization | 
 **commentId** | **String**| \u8BC4\u8BBAId | 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

