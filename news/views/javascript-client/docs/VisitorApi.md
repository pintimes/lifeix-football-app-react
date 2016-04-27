# FootballWemediaApi.VisitorApi

All URIs are relative to *http://192.168.50.103:8080/football/wemedia*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getComment**](VisitorApi.md#getComment) | **GET** /comments/{commentId} | \u83B7\u5F97Post\u8BC4\u8BBA
[**getComments**](VisitorApi.md#getComments) | **GET** /comments | \u83B7\u5F97Post\u8BC4\u8BBA\u5217\u8868
[**getPost**](VisitorApi.md#getPost) | **GET** /posts/{postId} | \u6839\u636EId\u83B7\u53D6Post\u8BE6\u60C5
[**getPostList**](VisitorApi.md#getPostList) | **GET** /posts | \u6839\u636E\u641C\u7D22\u6761\u4EF6\u83B7\u53D6Post\u5217\u8868
[**likesUsersGet**](VisitorApi.md#likesUsersGet) | **GET** /likes/users | \u6839\u636EpostId\u83B7\u53D6\u5BF9\u6B64\u7BC7\u6587\u7AE0\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868


<a name="getComment"></a>
# **getComment**
> Comment getComment(commentId)

\u83B7\u5F97Post\u8BC4\u8BBA

\u67E5\u770BPost\u7684\u8BC4\u8BBA\u5217\u8868

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.VisitorApi()

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

### HTTP request headers

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

var apiInstance = new FootballWemediaApi.VisitorApi()

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
 **limit** | **Integer**| \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4&#x3D;10 | [optional] [default to 10]
 **isAsc** | **Boolean**| \u662F\u5426\u662F\u5347\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u5347\u5E8F | [optional] [default to false]

### Return type

[**[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPost"></a>
# **getPost**
> Post getPost(postId)

\u6839\u636EId\u83B7\u53D6Post\u8BE6\u60C5

\u8FD4\u56DEPost\u8BE6\u60C5\u5BF9\u8C61

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.VisitorApi()

var postId = "postId_example"; // {String} Post\u7684ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPost(postId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postId** | **String**| Post\u7684ID | 

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPostList"></a>
# **getPostList**
> [Post] getPostList(opts)

\u6839\u636E\u641C\u7D22\u6761\u4EF6\u83B7\u53D6Post\u5217\u8868

\u6839\u636E\u641C\u7D22\u6761\u4EF6\u83B7\u53D6Post\u5217\u8868\uFF0C\u6BCF\u6B21\u641C\u7D22\u4E0D\u80FD\u8D85\u8FC730\u6761

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.VisitorApi()

var opts = { 
  'title': "title_example", // {String} \u6587\u7AE0\u7684\u6807\u9898
  'hot': true, // {Boolean} \u662F\u5426\u662F\u70ED\u5E16
  'good': true, // {Boolean} \u662F\u5426\u5DF2\u52A0\u7CBE
  'top': true, // {Boolean} \u662F\u5426\u5DF2\u7F6E\u9876
  'authorName': "authorName_example", // {String} \u4F5C\u8005\u540D\u5B57
  'authorId': "authorId_example", // {String} \u4F5C\u8005id
  'orderBy': "commentTime", // {String} \u6839\u636E\u54EA\u4E00\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F\uFF1AcreateTime,commentTime
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
api.getPostList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| \u6587\u7AE0\u7684\u6807\u9898 | [optional] 
 **hot** | **Boolean**| \u662F\u5426\u662F\u70ED\u5E16 | [optional] 
 **good** | **Boolean**| \u662F\u5426\u5DF2\u52A0\u7CBE | [optional] 
 **top** | **Boolean**| \u662F\u5426\u5DF2\u7F6E\u9876 | [optional] 
 **authorName** | **String**| \u4F5C\u8005\u540D\u5B57 | [optional] 
 **authorId** | **String**| \u4F5C\u8005id | [optional] 
 **orderBy** | **String**| \u6839\u636E\u54EA\u4E00\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F\uFF1AcreateTime,commentTime | [optional] [default to commentTime]
 **limit** | **Integer**| \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4&#x3D;10 | [optional] [default to 10]
 **isAsc** | **Boolean**| \u662F\u5426\u662F\u5347\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u5347\u5E8F | [optional] [default to false]

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="likesUsersGet"></a>
# **likesUsersGet**
> [User] likesUsersGet(postId, opts)

\u6839\u636EpostId\u83B7\u53D6\u5BF9\u6B64\u7BC7\u6587\u7AE0\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868

\u8FD4\u56DE\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.VisitorApi()

var postId = "postId_example"; // {String} \u7528\u6237\u559C\u6B22\u7684PostId

var opts = { 
  'limit': 10, // {Integer} \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.likesUsersGet(postId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postId** | **String**| \u7528\u6237\u559C\u6B22\u7684PostId | 
 **limit** | **Integer**| \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4&#x3D;10 | [optional] [default to 10]

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

