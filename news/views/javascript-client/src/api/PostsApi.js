(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Post'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Post'));
  } else {
    // Browser globals (root is window)
    if (!root.FootballWemediaApi) {
      root.FootballWemediaApi = {};
    }
    root.FootballWemediaApi.PostsApi = factory(root.FootballWemediaApi.ApiClient, root.FootballWemediaApi.Post);
  }
}(this, function(ApiClient, Post) {
  'use strict';

  /**
   * Posts service.
   * @module api/PostsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PostsApi. 
   * @alias module:api/PostsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addPost operation.
     * @callback module:api/PostsApi~addPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u521B\u5EFA\u4E00\u4E2APost
     * \u521B\u5EFA\u4E00\u4E2APost,\u5176\u4E2Dtitle,content\u5FC5\u586B\u3002
     * @param {String} userId authorization
     * @param {module:model/Post} post \u5E16\u5B50
     * @param {module:api/PostsApi~addPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Post}
     */
    this.addPost = function(userId, post, callback) {
      var postBody = post;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addPost";
      }

      // verify the required parameter 'post' is set
      if (post == undefined || post == null) {
        throw "Missing the required parameter 'post' when calling addPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'userId': userId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Post;

      return this.apiClient.callApi(
        '/posts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePost operation.
     * @callback module:api/PostsApi~deletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u7528\u6237\u5220\u9664Post
     * \u7528\u6237\u5220\u9664Post\uFF0C\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Post\uFF1B\u8BC4\u8BBA\u7B49\u4E0D\u53D8
     * @param {String} userId authorization
     * @param {String} postIds \u5E16\u5B50Id\u5217\u8868,\u5220\u9664\u591A\u4E2A\u65F6\uFF0C\u4F20\u591A\u6B21postIds
     * @param {module:api/PostsApi~deletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePost = function(userId, postIds, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deletePost";
      }

      // verify the required parameter 'postIds' is set
      if (postIds == undefined || postIds == null) {
        throw "Missing the required parameter 'postIds' when calling deletePost";
      }


      var pathParams = {
      };
      var queryParams = {
        'postIds': postIds
      };
      var headerParams = {
        'userId': userId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/posts', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPost operation.
     * @callback module:api/PostsApi~getPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u6839\u636EId\u83B7\u53D6Post\u8BE6\u60C5
     * \u8FD4\u56DEPost\u8BE6\u60C5\u5BF9\u8C61
     * @param {String} postId Post\u7684ID
     * @param {module:api/PostsApi~getPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Post}
     */
    this.getPost = function(postId, callback) {
      var postBody = null;

      // verify the required parameter 'postId' is set
      if (postId == undefined || postId == null) {
        throw "Missing the required parameter 'postId' when calling getPost";
      }


      var pathParams = {
        'postId': postId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Post;

      return this.apiClient.callApi(
        '/posts/{postId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPostList operation.
     * @callback module:api/PostsApi~getPostListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Post>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u6839\u636E\u641C\u7D22\u6761\u4EF6\u83B7\u53D6Post\u5217\u8868
     * \u6839\u636E\u641C\u7D22\u6761\u4EF6\u83B7\u53D6Post\u5217\u8868\uFF0C\u6BCF\u6B21\u641C\u7D22\u4E0D\u80FD\u8D85\u8FC730\u6761
     * @param {Object} opts Optional parameters
     * @param {String} opts.title \u6587\u7AE0\u7684\u6807\u9898
     * @param {Boolean} opts.hot \u662F\u5426\u662F\u70ED\u5E16
     * @param {Boolean} opts.good \u662F\u5426\u5DF2\u52A0\u7CBE
     * @param {Boolean} opts.top \u662F\u5426\u5DF2\u7F6E\u9876
     * @param {String} opts.authorName \u4F5C\u8005\u540D\u5B57
     * @param {String} opts.authorId \u4F5C\u8005id
     * @param {String} opts.orderBy \u6839\u636E\u54EA\u4E00\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F\uFF1AcreateTime,commentTime (default to commentTime)
     * @param {Integer} opts.limit \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4&#x3D;10 (default to 10)
     * @param {Boolean} opts.isAsc \u662F\u5426\u662F\u5347\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u5347\u5E8F (default to false)
     * @param {module:api/PostsApi~getPostListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Post>}
     */
    this.getPostList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'title': opts['title'],
        'hot': opts['hot'],
        'good': opts['good'],
        'top': opts['top'],
        'author.name': opts['authorName'],
        'author.id': opts['authorId'],
        'orderBy': opts['orderBy'],
        'limit': opts['limit'],
        'isAsc': opts['isAsc']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Post];

      return this.apiClient.callApi(
        '/posts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postsPut operation.
     * @callback module:api/PostsApi~postsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u4FEE\u6539\u4E00\u4E2APost
     * @param {String} userId authorization
     * @param {module:model/Post} post \u5E16\u5B50 postId\u5FC5\u987B\u4F20
     * @param {module:api/PostsApi~postsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Post}
     */
    this.postsPut = function(userId, post, callback) {
      var postBody = post;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling postsPut";
      }

      // verify the required parameter 'post' is set
      if (post == undefined || post == null) {
        throw "Missing the required parameter 'post' when calling postsPut";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'userId': userId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Post;

      return this.apiClient.callApi(
        '/posts', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
