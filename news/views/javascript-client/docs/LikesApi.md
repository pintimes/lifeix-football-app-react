# FootballWemediaApi.LikesApi

All URIs are relative to *http://192.168.50.19:8080/football/wemedia*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPostLike**](LikesApi.md#addPostLike) | **POST** /likes | \u7528\u6237\u5BF9Post\u70B9\u8D5E
[**likesPostsGet**](LikesApi.md#likesPostsGet) | **GET** /likes/posts | \u6839\u636EuserId\u83B7\u53D6\u7528\u6237\u559C\u6B22\u7684\u6587\u7AE0\u5217\u8868
[**likesUsersGet**](LikesApi.md#likesUsersGet) | **GET** /likes/users | \u6839\u636EpostId\u83B7\u53D6\u5BF9\u6B64\u7BC7\u6587\u7AE0\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868


<a name="addPostLike"></a>
# **addPostLike**
> addPostLike(userId, postId)

\u7528\u6237\u5BF9Post\u70B9\u8D5E

\u7528\u6237\u5BF9Post\u70B9\u8D5E

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.LikesApi()

var userId = "userId_example"; // {String} authorization

var postId = "postId_example"; // {String} \u7528\u6237\u559C\u6B22\u7684PostId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addPostLike(userId, postId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| authorization | 
 **postId** | **String**| \u7528\u6237\u559C\u6B22\u7684PostId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="likesPostsGet"></a>
# **likesPostsGet**
> [Post] likesPostsGet(userId, opts)

\u6839\u636EuserId\u83B7\u53D6\u7528\u6237\u559C\u6B22\u7684\u6587\u7AE0\u5217\u8868

\u8FD4\u56DE\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.LikesApi()

var userId = "userId_example"; // {String} \u7528\u6237\u7684userId

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
api.likesPostsGet(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| \u7528\u6237\u7684userId | 
 **limit** | **Integer**| \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10 | [optional] [default to 10]

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP reuqest headers

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

var apiInstance = new FootballWemediaApi.LikesApi()

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
 **limit** | **Integer**| \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10 | [optional] [default to 10]

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

