(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Comment', '../model/Post'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Comment'), require('../model/Post'));
  } else {
    // Browser globals (root is window)
    if (!root.FootballWemediaApi) {
      root.FootballWemediaApi = {};
    }
    root.FootballWemediaApi.UserApi = factory(root.FootballWemediaApi.ApiClient, root.FootballWemediaApi.Comment, root.FootballWemediaApi.Post);
  }
}(this, function(ApiClient, Comment, Post) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addComment operation.
     * @callback module:api/UserApi~addCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u8BC4\u8BBA
     * \u8BC4\u8BBA\uFF0CpostId\uFF08\u5FC5\u987B\uFF09\u3001content(\u5FC5\u987B)\u3001images(\u975E\u5FC5\u987B\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u7247\u53EF\u4EE5\u4E0D\u4F20),\u5176\u4ED6\u5B57\u6BB5\u540E\u53F0\u751F\u6210\u3002
     * @param {String} userId authorization
     * @param {module:model/Comment} comment \u8BC4\u8BBA
     * @param {module:api/UserApi~addCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Comment}
     */
    this.addComment = function(userId, comment, callback) {
      var postBody = comment;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addComment";
      }

      // verify the required parameter 'comment' is set
      if (comment == undefined || comment == null) {
        throw "Missing the required parameter 'comment' when calling addComment";
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
      var returnType = Comment;

      return this.apiClient.callApi(
        '/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addPost operation.
     * @callback module:api/UserApi~addPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u521B\u5EFA\u4E00\u4E2APost
     * \u521B\u5EFA\u4E00\u4E2APost,\u5176\u4E2Dtitle,content\u5FC5\u586B\u3002
     * @param {String} userId authorization
     * @param {module:model/Post} post \u5E16\u5B50
     * @param {module:api/UserApi~addPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the addPostLike operation.
     * @callback module:api/UserApi~addPostLikeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u7528\u6237\u5BF9Post\u70B9\u8D5E
     * \u7528\u6237\u5BF9Post\u70B9\u8D5E
     * @param {String} userId authorization
     * @param {String} postId \u7528\u6237\u559C\u6B22\u7684PostId
     * @param {module:api/UserApi~addPostLikeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addPostLike = function(userId, postId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addPostLike";
      }

      // verify the required parameter 'postId' is set
      if (postId == undefined || postId == null) {
        throw "Missing the required parameter 'postId' when calling addPostLike";
      }


      var pathParams = {
      };
      var queryParams = {
        'postId': postId
      };
      var headerParams = {
        'userId': userId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/likes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteComment operation.
     * @callback module:api/UserApi~deleteCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u7528\u6237\u5220\u9664Comment
     * \u7528\u6237\u5220\u9664Comment,\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Comment
     * @param {String} userId authorization
     * @param {String} commentId \u8BC4\u8BBAId
     * @param {module:api/UserApi~deleteCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Comment}
     */
    this.deleteComment = function(userId, commentId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteComment";
      }

      // verify the required parameter 'commentId' is set
      if (commentId == undefined || commentId == null) {
        throw "Missing the required parameter 'commentId' when calling deleteComment";
      }


      var pathParams = {
        'commentId': commentId
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
      var returnType = Comment;

      return this.apiClient.callApi(
        '/comments/{commentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePost operation.
     * @callback module:api/UserApi~deletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u7528\u6237\u5220\u9664Post
     * \u7528\u6237\u5220\u9664Post\uFF0C\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Post\uFF1B\u8BC4\u8BBA\u7B49\u4E0D\u53D8
     * @param {String} userId authorization
     * @param {String} postIds \u5E16\u5B50Id\u5217\u8868,\u5220\u9664\u591A\u4E2A\u65F6\uFF0C\u4F20\u591A\u6B21postIds
     * @param {module:api/UserApi~deletePostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the likesPostsGet operation.
     * @callback module:api/UserApi~likesPostsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Post>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u6839\u636EuserId\u83B7\u53D6\u7528\u6237\u559C\u6B22\u7684\u6587\u7AE0\u5217\u8868
     * \u8FD4\u56DE\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868
     * @param {String} userId \u7528\u6237\u7684userId
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10 (default to 10)
     * @param {module:api/UserApi~likesPostsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Post>}
     */
    this.likesPostsGet = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling likesPostsGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId,
        'limit': opts['limit']
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
        '/likes/posts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postsPut operation.
     * @callback module:api/UserApi~postsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u4FEE\u6539\u4E00\u4E2APost
     * @param {String} userId authorization
     * @param {module:model/Post} post \u5E16\u5B50 postId\u5FC5\u987B\u4F20
     * @param {module:api/UserApi~postsPutCallback} callback The callback function, accepting three arguments: error, data, response
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
