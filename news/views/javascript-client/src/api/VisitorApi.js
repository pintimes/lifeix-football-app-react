(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Comment', '../model/Post', '../model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Comment'), require('../model/Post'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.FootballWemediaApi) {
      root.FootballWemediaApi = {};
    }
    root.FootballWemediaApi.VisitorApi = factory(root.FootballWemediaApi.ApiClient, root.FootballWemediaApi.Comment, root.FootballWemediaApi.Post, root.FootballWemediaApi.User);
  }
}(this, function(ApiClient, Comment, Post, User) {
  'use strict';

  /**
   * Visitor service.
   * @module api/VisitorApi
   * @version 1.0.0
   */

  /**
   * Constructs a new VisitorApi. 
   * @alias module:api/VisitorApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getComment operation.
     * @callback module:api/VisitorApi~getCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u83B7\u5F97Post\u8BC4\u8BBA
     * \u67E5\u770BPost\u7684\u8BC4\u8BBA\u5217\u8868
     * @param {String} commentId \u8BC4\u8BBAId
     * @param {module:api/VisitorApi~getCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Comment}
     */
    this.getComment = function(commentId, callback) {
      var postBody = null;

      // verify the required parameter 'commentId' is set
      if (commentId == undefined || commentId == null) {
        throw "Missing the required parameter 'commentId' when calling getComment";
      }


      var pathParams = {
        'commentId': commentId
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
      var returnType = Comment;

      return this.apiClient.callApi(
        '/comments/{commentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getComments operation.
     * @callback module:api/VisitorApi~getCommentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Comment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u83B7\u5F97Post\u8BC4\u8BBA\u5217\u8868
     * \u67E5\u770BPost\u7684\u8BC4\u8BBA\u5217\u8868
     * @param {Object} opts Optional parameters
     * @param {String} opts.postId \u6587\u7AE0\u7F16\u53F7
     * @param {String} opts.userId \u53D1\u8868\u8BC4\u8BBA\u7684\u4EBA\u7684id
     * @param {String} opts.userName \u53D1\u8868\u8BC4\u8BBA\u7684\u4EBA\u7684\u59D3\u540D
     * @param {String} opts.orderBy \u6839\u636E\u54EA\u4E00\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F\uFF1AcreateTime,floorNum\u7B49 (default to commentTime)
     * @param {Integer} opts.limit \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10 (default to 10)
     * @param {Boolean} opts.isAsc \u662F\u5426\u662F\u5347\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u5347\u5E8F (default to false)
     * @param {module:api/VisitorApi~getCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Comment>}
     */
    this.getComments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'postId': opts['postId'],
        'user.id': opts['userId'],
        'user.name': opts['userName'],
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
      var returnType = [Comment];

      return this.apiClient.callApi(
        '/comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPost operation.
     * @callback module:api/VisitorApi~getPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u6839\u636EId\u83B7\u53D6Post\u8BE6\u60C5
     * \u8FD4\u56DEPost\u8BE6\u60C5\u5BF9\u8C61
     * @param {String} postId Post\u7684ID
     * @param {module:api/VisitorApi~getPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/VisitorApi~getPostListCallback
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
     * @param {Integer} opts.limit \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10 (default to 10)
     * @param {Boolean} opts.isAsc \u662F\u5426\u662F\u5347\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u5347\u5E8F (default to false)
     * @param {module:api/VisitorApi~getPostListCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the likesUsersGet operation.
     * @callback module:api/VisitorApi~likesUsersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u6839\u636EpostId\u83B7\u53D6\u5BF9\u6B64\u7BC7\u6587\u7AE0\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868
     * \u8FD4\u56DE\u70B9\u8D5E\u7684\u7528\u6237\u5217\u8868
     * @param {String} postId \u7528\u6237\u559C\u6B22\u7684PostId
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit \u4E00\u9875\u663E\u793A\u6570\u76EE\uFF0C\u5982\u679C\u4E0D\u4F20\u9ED8\u8BA4=10 (default to 10)
     * @param {module:api/VisitorApi~likesUsersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/User>}
     */
    this.likesUsersGet = function(postId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'postId' is set
      if (postId == undefined || postId == null) {
        throw "Missing the required parameter 'postId' when calling likesUsersGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'postId': postId,
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [User];

      return this.apiClient.callApi(
        '/likes/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
