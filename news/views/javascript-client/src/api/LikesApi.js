(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Post', '../model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Post'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.FootballWemediaApi) {
      root.FootballWemediaApi = {};
    }
    root.FootballWemediaApi.LikesApi = factory(root.FootballWemediaApi.ApiClient, root.FootballWemediaApi.Post, root.FootballWemediaApi.User);
  }
}(this, function(ApiClient, Post, User) {
  'use strict';

  /**
   * Likes service.
   * @module api/LikesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new LikesApi. 
   * @alias module:api/LikesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addPostLike operation.
     * @callback module:api/LikesApi~addPostLikeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u7528\u6237\u5BF9Post\u70B9\u8D5E
     * \u7528\u6237\u5BF9Post\u70B9\u8D5E
     * @param {String} userId authorization
     * @param {String} postId \u7528\u6237\u559C\u6B22\u7684PostId
     * @param {module:api/LikesApi~addPostLikeCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the likesPostsGet operation.
     * @callback module:api/LikesApi~likesPostsGetCallback
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
     * @param {module:api/LikesApi~likesPostsGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the likesUsersGet operation.
     * @callback module:api/LikesApi~likesUsersGetCallback
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
     * @param {module:api/LikesApi~likesUsersGetCallback} callback The callback function, accepting three arguments: error, data, response
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
