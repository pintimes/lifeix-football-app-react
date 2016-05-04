# FootballWemediaApi.CommentApi

All URIs are relative to *http://192.168.50.19:8080/football/wemedia*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addComment**](CommentApi.md#addComment) | **POST** /comments | \u8BC4\u8BBA
[**deleteComment**](CommentApi.md#deleteComment) | **DELETE** /comments/{commentId} | \u7528\u6237\u5220\u9664Comment
[**getComment**](CommentApi.md#getComment) | **GET** /comments/{commentId} | \u83B7\u5F97Post\u8BC4\u8BBA
[**getComments**](CommentApi.md#getComments) | **GET** /comments | \u83B7\u5F97Post\u8BC4\u8BBA\u5217\u8868


<a name="addComment"></a>
# **addComment**
> Comment addComment(userId, comment)

\u8BC4\u8BBA

\u8BC4\u8BBA\uFF0CpostId\uFF08\u5FC5\u987B\uFF09\u3001content(\u5FC5\u987B)\u3001images(\u975E\u5FC5\u987B\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u7247\u53EF\u4EE5\u4E0D\u4F20),\u5176\u4ED6\u5B57\u6BB5\u540E\u53F0\u751F\u6210\u3002

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.CommentApi()

var userId = "userId_example"; // {String} authorization

var comment = new FootballWemediaApi.Comment(); // {Comment} \u8BC4\u8BBA


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addComment(userId, comment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| authorization | 
 **comment** | [**Comment**](Comment.md)| \u8BC4\u8BBA | 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteComment"></a>
# **deleteComment**
> Comment deleteComment(userId, commentId)

\u7528\u6237\u5220\u9664Comment

\u7528\u6237\u5220\u9664Comment,\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Comment

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.CommentApi()

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

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getComment"></a>
# **getComment**
> Comment getComment(commentId)

\u83B7\u5F97Post\u8BC4\u8BBA

\u67E5\u770BPost\u7684\u8BC4\u8BBA\u5217\u8868

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.CommentApi()

var commentId = "commentId_example"; // {String} \u8BC4\u8BBAId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getComment(commentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | **String**| \u8BC4\u8BBAId | 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getComments"></a>
# **getComments**
> [Comment] getComments(opts)

\u83B7\u5F97Post\u8BC4\u8BBA\u5217\u8868

\u67E5\u770BPost\u7684\u8BC4\u8BBA\u5217\u8868

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.CommentApi()

var opts = { 
  'postId': "postId_example", // {String} \u6587\u7AE0\u7F16\u53F7
  'userId': "userId_example", // {String} \u53D1\u8868\u8BC4\u8BBA\u7684\u4EBA\u7684id
  'userName': "userName_example", // {String} \u53D1\u8868\u8BC4\u8BBA\u7684\u4EBA\u7684\u59D3\u540D
  'orderBy': "commentTime", // {String} \u6839\u636E\u54EA\u4E00\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F\uFF1AcreateTime,floorNum\u7B49
  'limit': 10, // {Integer} \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10
  'isAsc': false // {Boolean} \u662F\u5426\u662F\u5347\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u5347\u5E8F
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getComments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postId** | **String**| \u6587\u7AE0\u7F16\u53F7 | [optional] 
 **userId** | **String**| \u53D1\u8868\u8BC4\u8BBA\u7684\u4EBA\u7684id | [optional] 
 **userName** | **String**| \u53D1\u8868\u8BC4\u8BBA\u7684\u4EBA\u7684\u59D3\u540D | [optional] 
 **orderBy** | **String**| \u6839\u636E\u54EA\u4E00\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F\uFF1AcreateTime,floorNum\u7B49 | [optional] [default to commentTime]
 **limit** | **Integer**| \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10 | [optional] [default to 10]
 **isAsc** | **Boolean**| \u662F\u5426\u662F\u5347\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u5347\u5E8F | [optional] [default to false]

### Return type

[**[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

