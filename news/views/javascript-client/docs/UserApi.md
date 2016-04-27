# FootballWemediaApi.UserApi

All URIs are relative to *http://192.168.50.103:8080/football/wemedia*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addComment**](UserApi.md#addComment) | **POST** /comments | \u8BC4\u8BBA
[**addPost**](UserApi.md#addPost) | **POST** /posts | \u521B\u5EFA\u4E00\u4E2APost
[**addPostLike**](UserApi.md#addPostLike) | **POST** /likes | \u7528\u6237\u5BF9Post\u70B9\u8D5E
[**deleteComment**](UserApi.md#deleteComment) | **DELETE** /comments/{commentId} | \u7528\u6237\u5220\u9664Comment
[**deletePost**](UserApi.md#deletePost) | **DELETE** /posts | \u7528\u6237\u5220\u9664Post
[**likesPostsGet**](UserApi.md#likesPostsGet) | **GET** /likes/posts | \u6839\u636EuserId\u83B7\u53D6\u7528\u6237\u559C\u6B22\u7684\u6587\u7AE0\u5217\u8868
[**postsPut**](UserApi.md#postsPut) | **PUT** /posts | \u4FEE\u6539\u4E00\u4E2APost


<a name="addComment"></a>
# **addComment**
> Comment addComment(userId, comment)

\u8BC4\u8BBA

\u8BC4\u8BBA\uFF0CpostId\uFF08\u5FC5\u987B\uFF09\u3001content(\u5FC5\u987B)\u3001images(\u975E\u5FC5\u987B\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u7247\u53EF\u4EE5\u4E0D\u4F20),\u5176\u4ED6\u5B57\u6BB5\u540E\u53F0\u751F\u6210\u3002

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.UserApi()

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

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addPost"></a>
# **addPost**
> Post addPost(userId, post)

\u521B\u5EFA\u4E00\u4E2APost

\u521B\u5EFA\u4E00\u4E2APost,\u5176\u4E2Dtitle,content\u5FC5\u586B\u3002

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.UserApi()

var userId = "userId_example"; // {String} authorization

var post = new FootballWemediaApi.Post(); // {Post} \u5E16\u5B50


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addPost(userId, post, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| authorization | 
 **post** | [**Post**](Post.md)| \u5E16\u5B50 | 

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPostLike"></a>
# **addPostLike**
> addPostLike(userId, postId)

\u7528\u6237\u5BF9Post\u70B9\u8D5E

\u7528\u6237\u5BF9Post\u70B9\u8D5E

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.UserApi()

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

### HTTP request headers

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

var apiInstance = new FootballWemediaApi.UserApi()

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

<a name="deletePost"></a>
# **deletePost**
> deletePost(userId, postIds)

\u7528\u6237\u5220\u9664Post

\u7528\u6237\u5220\u9664Post\uFF0C\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Post\uFF1B\u8BC4\u8BBA\u7B49\u4E0D\u53D8

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.UserApi()

var userId = "userId_example"; // {String} authorization

var postIds = "postIds_example"; // {String} \u5E16\u5B50Id\u5217\u8868,\u5220\u9664\u591A\u4E2A\u65F6\uFF0C\u4F20\u591A\u6B21postIds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deletePost(userId, postIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| authorization | 
 **postIds** | **String**| \u5E16\u5B50Id\u5217\u8868,\u5220\u9664\u591A\u4E2A\u65F6\uFF0C\u4F20\u591A\u6B21postIds | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="likesPostsGet"></a>
# **likesPostsGet**
> [Post] likesPostsGet(userId, opts)

\u6839\u636EuserId\u83B7\u53D6\u7528\u6237\u559C\u6B22\u7684\u6587\u7AE0\u5217\u8868

\u8FD4\u56DE\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.UserApi()

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
 **limit** | **Integer**| \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4&#x3D;10 | [optional] [default to 10]

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postsPut"></a>
# **postsPut**
> Post postsPut(userId, post)

\u4FEE\u6539\u4E00\u4E2APost

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.UserApi()

var userId = "userId_example"; // {String} authorization

var post = new FootballWemediaApi.Post(); // {Post} \u5E16\u5B50 postId\u5FC5\u987B\u4F20


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.postsPut(userId, post, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| authorization | 
 **post** | [**Post**](Post.md)| \u5E16\u5B50 postId\u5FC5\u987B\u4F20 | 

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

