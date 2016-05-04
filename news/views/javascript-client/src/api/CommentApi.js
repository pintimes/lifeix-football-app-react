(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Comment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Comment'));
  } else {
    // Browser globals (root is window)
    if (!root.FootballWemediaApi) {
      root.FootballWemediaApi = {};
    }
    root.FootballWemediaApi.CommentApi = factory(root.FootballWemediaApi.ApiClient, root.FootballWemediaApi.Comment);
  }
}(this, function(ApiClient, Comment) {
  'use strict';

  /**
   * Comment service.
   * @module api/CommentApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CommentApi. 
   * @alias module:api/CommentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addComment operation.
     * @callback module:api/CommentApi~addCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u8BC4\u8BBA
     * \u8BC4\u8BBA\uFF0CpostId\uFF08\u5FC5\u987B\uFF09\u3001content(\u5FC5\u987B)\u3001images(\u975E\u5FC5\u987B\uFF0C\u4E0D\u4E0A\u4F20\u56FE\u7247\u53EF\u4EE5\u4E0D\u4F20),\u5176\u4ED6\u5B57\u6BB5\u540E\u53F0\u751F\u6210\u3002
     * @param {String} userId authorization
     * @param {module:model/Comment} comment \u8BC4\u8BBA
     * @param {module:api/CommentApi~addCommentCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the deleteComment operation.
     * @callback module:api/CommentApi~deleteCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u7528\u6237\u5220\u9664Comment
     * \u7528\u6237\u5220\u9664Comment,\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Comment
     * @param {String} userId authorization
     * @param {String} commentId \u8BC4\u8BBAId
     * @param {module:api/CommentApi~deleteCommentCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getComment operation.
     * @callback module:api/CommentApi~getCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u83B7\u5F97Post\u8BC4\u8BBA
     * \u67E5\u770BPost\u7684\u8BC4\u8BBA\u5217\u8868
     * @param {String} commentId \u8BC4\u8BBAId
     * @param {module:api/CommentApi~getCommentCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/CommentApi~getCommentsCallback
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
     * @param {module:api/CommentApi~getCommentsCallback} callback The callback function, accepting three arguments: error, data, response
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
  };

  return exports;
}));
