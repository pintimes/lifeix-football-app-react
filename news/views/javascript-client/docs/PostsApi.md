# FootballWemediaApi.PostsApi

All URIs are relative to *http://192.168.50.19:8080/football/wemedia*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPost**](PostsApi.md#addPost) | **POST** /posts | \u521B\u5EFA\u4E00\u4E2APost
[**deletePost**](PostsApi.md#deletePost) | **DELETE** /posts | \u7528\u6237\u5220\u9664Post
[**getPost**](PostsApi.md#getPost) | **GET** /posts/{postId} | \u6839\u636EId\u83B7\u53D6Post\u8BE6\u60C5
[**getPostList**](PostsApi.md#getPostList) | **GET** /posts | \u6839\u636E\u641C\u7D22\u6761\u4EF6\u83B7\u53D6Post\u5217\u8868
[**postsPut**](PostsApi.md#postsPut) | **PUT** /posts | \u4FEE\u6539\u4E00\u4E2APost


<a name="addPost"></a>
# **addPost**
> Post addPost(userId, post)

\u521B\u5EFA\u4E00\u4E2APost

\u521B\u5EFA\u4E00\u4E2APost,\u5176\u4E2Dtitle,content\u5FC5\u586B\u3002

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.PostsApi()

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePost"></a>
# **deletePost**
> deletePost(userId, postIds)

\u7528\u6237\u5220\u9664Post

\u7528\u6237\u5220\u9664Post\uFF0C\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Post\uFF1B\u8BC4\u8BBA\u7B49\u4E0D\u53D8

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.PostsApi()

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPost"></a>
# **getPost**
> Post getPost(postId)

\u6839\u636EId\u83B7\u53D6Post\u8BE6\u60C5

\u8FD4\u56DEPost\u8BE6\u60C5\u5BF9\u8C61

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.PostsApi()

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

### HTTP reuqest headers

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

var apiInstance = new FootballWemediaApi.PostsApi()

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
 **limit** | **Integer**| \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10 | [optional] [default to 10]
 **isAsc** | **Boolean**| \u662F\u5426\u662F\u5347\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u5347\u5E8F | [optional] [default to false]

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postsPut"></a>
# **postsPut**
> Post postsPut(userId, post)

\u4FEE\u6539\u4E00\u4E2APost

### Example
```javascript
var FootballWemediaApi = require('football-wemedia-api');

var apiInstance = new FootballWemediaApi.PostsApi()

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

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

